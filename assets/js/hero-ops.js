/* Hero operations board for clairenhaus.com.
   Small cards of everyday work (a missed call, a new lead, an invoice) slide in and
   flip from "needs attention" to "done", on a loop of about 11 seconds.
   Decorative only (aria-hidden). Runs only when motion is allowed, pauses offscreen
   or in a background tab, and leaves the static finished board in place otherwise.
   No inline styles or scripts, so the site's Content Security Policy is unchanged. */
(function () {
  'use strict';

  var root = document.querySelector('.hero-ops');
  if (!root || !window.matchMedia || !('IntersectionObserver' in window)) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduce.matches) return;

  var panel = root.querySelector('.ops-panel');
  var list = root.querySelector('.ops-list');
  var stage = root.querySelector('.ops-stage');
  var toast = root.querySelector('.ops-toast');
  var toastText = root.querySelector('.ops-toast-text');
  var fill = root.querySelector('.ops-ring-fill');
  if (!panel || !list || !stage) return;

  var NS = 'http://www.w3.org/2000/svg';
  var ICONS = {
    phone: ['M7.5 4.5h2.2l1.1 3.1-1.6 1.1a9.5 9.5 0 0 0 4.6 4.6l1.1-1.6 3.1 1.1v2.2a1.6 1.6 0 0 1-1.7 1.6A12.6 12.6 0 0 1 5.9 6.2 1.6 1.6 0 0 1 7.5 4.5Z'],
    lead: ['M13.2 8a3.2 3.2 0 1 1-6.4 0 3.2 3.2 0 0 1 6.4 0Z', 'M4.5 18.5c.6-3 2.8-4.6 5.5-4.6s4.9 1.6 5.5 4.6', 'M18 7v5M15.5 9.5h5'],
    mail: ['M5.5 5.5h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z', 'm4 7 8 6 8-6'],
    invoice: ['M6.5 3.5h11v17l-2.75-1.6-2.75 1.6-2.75-1.6-2.75 1.6Z', 'M9.5 8.5h5M9.5 12h5'],
    cal: ['M6 5.5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2Z', 'M4 10h16M8.5 3.5v4M15.5 3.5v4'],
    pen: ['M14.5 5.5l4 4L9 19H5v-4Z', 'M12.5 7.5l4 4'],
    chat: ['M5 5.5h14a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-8l-4.5 3v-3H5A1.5 1.5 0 0 1 3.5 15V7A1.5 1.5 0 0 1 5 5.5Z']
  };
  var CHECK = 'm3.5 8.5 3 3 6-6.5';

  var ITEMS = [
    { icon: 'phone', title: 'Missed call', before: '(404) \u2022\u2022\u2022 \u00b7 just now', chip: 'Missed', after: 'Texted back automatically', toast: 'Missed call texted back' },
    { icon: 'lead', title: 'New lead', before: 'Website form', chip: 'New', after: 'Added to pipeline', toast: 'Lead added to pipeline' },
    { icon: 'mail', title: 'Follow-up due', before: 'Proposal \u00b7 today', chip: 'Due', after: 'Sent', toast: 'Follow-up sent' },
    { icon: 'invoice', title: 'Invoice #1042', before: 'Awaiting payment', chip: 'Open', after: 'Paid', toast: 'Invoice paid' },
    { icon: 'cal', title: 'Appointment request', before: 'From your booking page', chip: 'Request', after: 'Booked \u00b7 Tue 10:00', toast: 'Appointment booked' },
    { icon: 'chat', title: 'New inquiry', before: 'Contact form', chip: 'Waiting', after: 'Answered and tagged', toast: 'Inquiry answered' },
    { icon: 'pen', title: 'Service agreement', before: 'Awaiting signature', chip: 'Pending', after: 'Signed and filed', toast: 'Agreement signed' }
  ];
  var STEP = 1500;       // a new card every 1.5 s
  var FLIP = 650;        // it flips to done 0.65 s after it lands
  var HOLD = 2400;       // "All caught up" gets a longer beat before the next round
  var SLOTS = 3;

  function svg(paths, box) {
    var s = document.createElementNS(NS, 'svg');
    s.setAttribute('viewBox', box || '0 0 24 24');
    s.setAttribute('aria-hidden', 'true');
    paths.forEach(function (d) { var p = document.createElementNS(NS, 'path'); p.setAttribute('d', d); s.appendChild(p); });
    return s;
  }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }
  function card(item) {
    var li = el('li', 'op-card is-new');
    var ico = el('span', 'op-ico'); ico.appendChild(svg(ICONS[item.icon]));
    var text = el('span', 'op-text');
    text.appendChild(el('span', 'op-title', item.title));
    var sub = el('span', 'op-sub');
    sub.appendChild(el('span', 'op-sub-a', item.before));
    sub.appendChild(el('span', 'op-sub-b', item.after));
    text.appendChild(sub);
    var chip = el('span', 'op-chip');
    chip.appendChild(el('span', 'op-chip-a', item.chip));
    var done = el('span', 'op-chip-b'); done.appendChild(svg([CHECK], '0 0 16 16')); done.appendChild(document.createTextNode('Done'));
    chip.appendChild(done);
    li.appendChild(ico); li.appendChild(text); li.appendChild(chip);
    return li;
  }

  var cards = [];        // newest first: { node, slot }
  var index = 0;         // next item
  var handled = 0;
  var timers = [];
  var running = false;
  var started = false;

  function later(fn, ms) {
    var id = setTimeout(function () { timers = timers.filter(function (t) { return t.id !== id; }); fn(); }, ms);
    timers.push({ id: id, fn: fn });
  }
  function setSlot(c) { c.node.style.setProperty('--slot', c.slot); }
  function setProgress(p) { if (fill) fill.style.setProperty('--p', p); }

  function showToast(text) {
    if (!toast || !toastText) return;
    toast.classList.add('is-hidden');
    later(function () { toastText.textContent = text; toast.classList.remove('is-hidden'); }, 180);
  }

  function flip(c, item) {
    c.node.classList.add('is-done', 'is-flash');
    later(function () { c.node.classList.remove('is-flash'); }, 650);
    handled += 1;
    setProgress(handled / ITEMS.length);
    showToast(item.toast);
    if (handled === ITEMS.length) panel.classList.add('is-caught');
  }

  function tick() {
    if (!running) return;
    var item = ITEMS[index];
    if (index === 0) { handled = 0; panel.classList.remove('is-caught'); setProgress(0); }

    cards.forEach(function (c) {
      c.slot += 1;
      if (c.slot >= SLOTS) {
        c.node.classList.add('is-out');
        var gone = c.node;
        later(function () { if (gone.parentNode) gone.parentNode.removeChild(gone); }, 650);
      } else {
        setSlot(c);
      }
    });
    cards = cards.filter(function (c) { return c.slot < SLOTS; });

    var c = { node: card(item), slot: 0 };
    setSlot(c);
    list.insertBefore(c.node, list.firstChild);
    void c.node.offsetWidth;            // commit the entering state before it moves
    c.node.classList.remove('is-new');
    cards.unshift(c);

    later(function () { flip(c, item); }, FLIP);

    index = (index + 1) % ITEMS.length;
    later(tick, index === 0 ? STEP + HOLD - 600 : STEP);
  }

  function start() {
    if (running) return;
    running = true;
    root.classList.remove('is-paused');
    if (!started) {
      started = true;
      // Keep the three finished cards already on the page as the previous round.
      var existing = Array.prototype.slice.call(list.querySelectorAll('.op-card'));
      root.classList.add('is-live', 'is-instant');
      existing.forEach(function (n, i) { var c = { node: n, slot: i }; setSlot(c); cards.push(c); });
      void list.offsetWidth;            // place the finished cards without sliding them
      root.classList.remove('is-instant');
      panel.classList.remove('is-caught');
      setProgress(0);
      later(tick, 120);
    } else {
      later(tick, 250);
    }
  }
  function stop() {
    if (!running) return;
    running = false;
    root.classList.add('is-paused');
    // Run anything still pending (flips, removals) at once so the board is settled.
    for (var round = 0; round < 4 && timers.length; round++) {
      var pending = timers; timers = [];
      pending.forEach(function (t) { clearTimeout(t.id); if (t.fn !== tick) t.fn(); });
    }
    timers.forEach(function (t) { clearTimeout(t.id); }); timers = [];
    if (toast) toast.classList.remove('is-hidden');
  }

  var onScreen = false;
  function sync() { if (onScreen && !document.hidden && !reduce.matches) start(); else stop(); }
  new IntersectionObserver(function (entries) {
    onScreen = entries[entries.length - 1].isIntersecting; sync();
  }, { threshold: 0.05 }).observe(root);
  document.addEventListener('visibilitychange', sync);
  if (reduce.addEventListener) reduce.addEventListener('change', sync);

  // Gentle tilt toward the pointer on desktop.
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (fine.matches) {
    root.addEventListener('pointermove', function (e) {
      var r = root.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      stage.style.setProperty('--ry', (x * 9).toFixed(2) + 'deg');
      stage.style.setProperty('--rx', (y * -7).toFixed(2) + 'deg');
    });
    root.addEventListener('pointerleave', function () {
      stage.style.setProperty('--ry', '0deg');
      stage.style.setProperty('--rx', '0deg');
    });
  }
})();
