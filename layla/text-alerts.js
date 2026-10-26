// Layla call-summary text sign-up (/layla/text-alerts).
// Sends to the same Zapier Catch Hook the homepage contact form uses (see /assets/js/home.js),
// with the same field names (first_name, last_name, email, organization, service, message,
// submitted_at, source) so the existing Zap keeps working, plus the texting opt-in record.
(function () {
  const ZAPIER_WEBHOOK = 'https://hooks.zapier.com/hooks/catch/26774884/u7l63og/';
  const form = document.getElementById('sms-form');
  if (!form) return;
  const status = document.getElementById('sf-status');
  const box = document.getElementById('sf-consent-box');
  const consent = document.getElementById('sf-consent');
  const consentText = document.getElementById('sf-consent-text').textContent.replace(/\s+/g, ' ').trim();
  const LABEL = 'Sign me up for texts';

  function show(type, msg) { status.className = 'status ' + type; status.textContent = msg; }
  function digits(v) { return (v || '').replace(/\D/g, ''); }
  function usMobile(v) {
    let d = digits(v);
    if (d.length === 11 && d[0] === '1') d = d.slice(1);
    return d.length === 10 && /^[2-9]\d{2}[2-9]\d{6}$/.test(d) ? '+1' + d : null;
  }

  function validate() {
    let ok = true;
    form.querySelectorAll('input[type=text],input[type=email],input[type=tel]').forEach(el => {
      let bad = !el.value.trim();
      if (el.type === 'email' && !bad) bad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim());
      if (el.type === 'tel' && !bad) bad = !usMobile(el.value);
      if (bad) { el.setAttribute('aria-invalid', 'true'); ok = false; } else el.removeAttribute('aria-invalid');
    });
    if (!consent.checked) { box.classList.add('bad'); consent.setAttribute('aria-invalid', 'true'); ok = false; }
    else { box.classList.remove('bad'); consent.removeAttribute('aria-invalid'); }
    return ok;
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    if (!validate()) {
      const ph = form.querySelector('#sf-phone'); const phoneBad = ph.value.trim() && !usMobile(ph.value);
      show('err', !consent.checked && form.querySelectorAll('[aria-invalid="true"]').length === 1
        ? 'Please tick the box to agree to receive texts.'
        : phoneBad ? 'Please check the required fields. The mobile number should be a 10-digit US number.'
        : 'Please fill in the required fields and tick the box to agree to receive texts.');
      const first = form.querySelector('[aria-invalid="true"]');
      if (first) first.focus();
      return;
    }
    const now = new Date().toISOString();
    const phone = usMobile(form.querySelector('#sf-phone').value);
    const data = {
      first_name: form.querySelector('#sf-first').value.trim(),
      last_name: form.querySelector('#sf-last').value.trim(),
      email: form.querySelector('#sf-email').value.trim(),
      organization: form.querySelector('#sf-biz').value.trim(),
      service: 'layla-sms-optin',
      message: 'Layla call summary texts: SMS opt-in. Mobile: ' + phone + '. Agreed ' + now + ' on ' + location.href + ' to: "' + consentText + '"',
      phone: phone,
      sms_consent: 'yes',
      sms_consent_text: consentText,
      sms_consent_at: now,
      sms_program: 'Layla Call Summaries',
      page_url: location.href,
      user_agent: navigator.userAgent,
      submitted_at: now,
      source: 'Clairen Haus Website: Layla text sign-up'
    };
    const btn = form.querySelector('button[type=submit]');
    btn.disabled = true; btn.textContent = 'Signing you up…';
    try {
      const res = await fetch(ZAPIER_WEBHOOK, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (res.ok || res.status === 0) {
        show('ok', "You're signed up. Layla's call summaries will come by text from Clairen Haus. Reply STOP at any time to opt out, or HELP for help.");
        form.reset();
      } else { throw new Error('Server error'); }
    } catch (err) {
      show('err', 'Something went wrong. Please email us at hello@clairenhaus.com and we will sign you up.');
    } finally { btn.disabled = false; btn.textContent = LABEL; }
  });

  form.querySelectorAll('input').forEach(el => el.addEventListener('input', () => {
    el.removeAttribute('aria-invalid');
    if (el === consent && consent.checked) box.classList.remove('bad');
  }));
})();
