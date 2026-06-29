const express = require('express');
const path = require('path');
const app = express();

app.use(express.json({ limit: '50kb' }));

// ── STATIC ASSETS ────────────────────────────────────────
// Serves CSS, JS, images etc from /public
app.use(express.static(path.join(__dirname, 'public')));

// ── ANTHROPIC PROXY ──────────────────────────────────────
app.post('/api/claude', async (req, res) => {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return res.status(500).json({ error: 'API key not configured' });
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        ...req.body,
        system: 'You are a social media content strategist. You have NO prior knowledge of any business, person, or brand. You know ONLY what is provided in this single request. Base every response exclusively on the information given. Do not reference, infer, or assume anything beyond what is explicitly stated.',
        max_tokens: req.body.max_tokens || 8000
      })
    });
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json(data);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── STRIPE ENDPOINTS ─────────────────────────────────────
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create payment intent
app.post('/api/create-payment-intent', async (req, res) => {
  const { amount, currency, name, email, product } = req.body;
  if (!email || !name || !amount) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }
  try {
    let customer;
    const existing = await stripe.customers.list({ email, limit: 1 });
    if (existing.data.length > 0) {
      customer = existing.data[0];
    } else {
      customer = await stripe.customers.create({
        email, name,
        metadata: { source: 'tools.clairenhaus.com' }
      });
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: currency || 'usd',
      customer: customer.id,
      receipt_email: email,
      metadata: { product, buyer_name: name, buyer_email: email },
      description: 'The 5-Minute Follow-Up System — Clairen Haus'
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('[create-payment-intent]', err.message);
    res.status(500).json({ error: err.message });
  }
});

// Send kit access email
app.post('/api/send-kit-access', async (req, res) => {
  const { name, email, paymentIntent } = req.body;
  if (!email) return res.status(400).json({ error: 'Email required.' });
  const accessUrl = process.env.KIT_ACCESS_URL || 'https://tools.clairenhaus.com/systems/follow-up-kit';
  const firstName = (name || 'there').split(' ')[0];
  try {
    if (paymentIntent) {
      const pi = await stripe.paymentIntents.retrieve(paymentIntent);
      if (pi.status !== 'succeeded') {
        return res.status(400).json({ error: 'Payment not confirmed.' });
      }
    }
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: `Clairen Haus <${process.env.FROM_EMAIL || 'hello@clairenhaus.com'}>`,
        to: email,
        reply_to: 'hello@clairenhaus.com',
        subject: "You're in — here's your access link",
        html: `<p>Hi ${firstName}, your access link: <a href="${accessUrl}">${accessUrl}</a></p>`
      })
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('[send-kit-access]', err.message);
    res.json({ ok: true });
  }
});

// Verify access
app.post('/api/verify-access', async (req, res) => {
  const { email, product } = req.body;
  if (!email) return res.status(400).json({ valid: false });
  try {
    const customers = await stripe.customers.list({ email, limit: 1 });
    if (customers.data.length === 0) return res.json({ valid: false });
    const customer = customers.data[0];
    const paymentIntents = await stripe.paymentIntents.list({ customer: customer.id, limit: 20 });
    const valid = paymentIntents.data.find(pi =>
      pi.status === 'succeeded' && (!product || pi.metadata.product === product)
    );
    if (!valid) return res.json({ valid: false });
    const name = (customer.name || '').split(' ')[0] || '';
    res.json({ valid: true, name });
  } catch (err) {
    console.error('[verify-access]', err.message);
    res.status(500).json({ valid: false });
  }
});

// ── PAGE ROUTES ───────────────────────────────────────────
// Each route maps a clean URL to its HTML file.
// Add a new app.get() here for every new page.

const page = (file) => (req, res) =>
  res.sendFile(path.join(__dirname, file));

// Hub
app.get('/',                                      page('index.html'));

// Existing tools (served from root, matching current structure)
app.get('/calendar',                              page('index.html'));   // update to calendar.html if you split it out
app.get('/ecommerce',                             page('index.html'));   // same

// Systems + Kits
app.get('/systems/follow-up-kit',                 page('systems/follow-up-kit/index.html'));
app.get('/systems/follow-up-kit/checkout',        page('systems/follow-up-kit/checkout.html'));
app.get('/systems/follow-up-kit/blueprint',       page('systems/follow-up-kit/blueprint.html'));

// 404
app.use((req, res) => res.status(404).sendFile(path.join(__dirname, 'index.html')));

// ── START ─────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Tools running on port ${PORT}`));
