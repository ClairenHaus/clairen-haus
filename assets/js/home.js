// Clairen Haus homepage behaviour: mobile navigation and the contact form.

// ─── MOBILE NAV ───────────────────────────────────────────────────
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const list = document.getElementById('nav-list');
  if (!toggle || !list) return;

  function setOpen(open) {
    list.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  list.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && list.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
  });
})();

// ─── ZAPIER WEBHOOK ───────────────────────────────────────────────
// Same Zapier Catch Hook and JSON payload the previous homepage used.
const ZAPIER_WEBHOOK = 'https://hooks.zapier.com/hooks/catch/26774884/u7l63og/';
// ─────────────────────────────────────────────────────────────────

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const SUBMIT_LABEL = 'Send';

function validateForm(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(el => {
    if (!el.value.trim()) { el.setAttribute('aria-invalid', 'true'); valid = false; }
    else { el.removeAttribute('aria-invalid'); }
  });
  const emailEl = form.querySelector('#email');
  if (emailEl.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
    emailEl.setAttribute('aria-invalid', 'true'); valid = false;
  }
  return valid;
}

function showStatus(type, message) {
  formStatus.className = 'form-status ' + type;
  formStatus.textContent = message;
}

if (contactForm) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    if (!validateForm(this)) {
      showStatus('error', 'Please fill in the required fields.');
      const first = this.querySelector('[aria-invalid="true"]');
      if (first) first.focus();
      return;
    }

    // Same field names as before, so the existing Zap keeps working.
    const data = {
      first_name:   this.querySelector('#first-name').value.trim(),
      last_name:    this.querySelector('#last-name').value.trim(),
      email:        this.querySelector('#email').value.trim(),
      organization: this.querySelector('#org').value.trim(),
      service:      this.querySelector('#service').value,
      message:      this.querySelector('#message').value.trim(),
      submitted_at: new Date().toISOString(),
      source:       'Clairen Haus Website'
    };

    const submitBtn = this.querySelector('.form-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      const res = await fetch(ZAPIER_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok || res.status === 0) {
        showStatus('success', "Thank you. We've received your message and will be in touch within 48 hours.");
        this.reset();
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      showStatus('error', 'Something went wrong. Please email us directly at hello@clairenhaus.com');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = SUBMIT_LABEL;
    }
  });

  contactForm.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('input', () => el.removeAttribute('aria-invalid'));
  });
}
