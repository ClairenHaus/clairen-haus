/* Pearl cursor for clairenhaus.com.
   A small glowing pearl follows the mouse with a light, smooth lag and swells
   open over links and buttons. Desktop only: it runs when the device has a
   fine pointer that can hover, and does nothing on phones and tablets.
   No inline styles or scripts, so the site's Content Security Policy is unchanged. */
(function () {
  'use strict';

  if (!window.matchMedia || !window.requestAnimationFrame) return;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  var CLICKABLE = 'a[href], button, [role="button"], [role="link"], [role="tab"], label[for], summary, select, ' +
    'input[type="submit"], input[type="button"], input[type="reset"], input[type="checkbox"], ' +
    'input[type="radio"], input[type="file"], input[type="image"], input[type="range"], [data-pearl-hover]';
  var TEXT = 'input, textarea, [contenteditable=""], [contenteditable="true"]';

  var root = document.documentElement;
  var pearl = null;
  var on = false;
  var tx = 0, ty = 0;      // where the mouse is
  var x = 0, y = 0;        // where the pearl is drawn
  var raf = 0, last = 0;
  var shown = false;

  function build() {
    pearl = document.createElement('div');
    pearl.className = 'pearl';
    pearl.setAttribute('aria-hidden', 'true');
    var orb = document.createElement('span');
    orb.className = 'pearl__orb';
    pearl.appendChild(orb);
    document.body.appendChild(pearl);
  }

  function draw() {
    pearl.style.transform = 'translate3d(' + x.toFixed(2) + 'px,' + y.toFixed(2) + 'px,0)';
  }

  function tick(now) {
    var dt = last ? Math.min(now - last, 64) : 16.7;
    last = now;
    // Frame-rate independent ease toward the mouse: smooth, never sluggish.
    var k = 1 - Math.pow(1 - 0.28, dt / 16.7);
    x += (tx - x) * k;
    y += (ty - y) * k;
    if (Math.abs(tx - x) < 0.1 && Math.abs(ty - y) < 0.1) {
      x = tx; y = ty;
      draw();
      raf = 0; last = 0;     // settled: stop the loop, zero work while idle
      return;
    }
    draw();
    raf = requestAnimationFrame(tick);
  }

  function isClickable(el) {
    var t = el && el.closest ? el.closest(CLICKABLE) : null;
    return !!(t && !t.disabled && t.getAttribute('aria-disabled') !== 'true');
  }
  function isText(el) {
    var t = el && el.closest ? el.closest(TEXT) : null;
    return !!(t && !t.matches(CLICKABLE) && t.type !== 'hidden');
  }

  function onMove(e) {
    if (e.pointerType && e.pointerType !== 'mouse') return;
    tx = e.clientX; ty = e.clientY;
    if (!shown) {
      // First real mouse move: place the pearl right under the pointer
      // (never animate in from the corner), then hide the system arrow.
      x = tx; y = ty; draw();
      root.classList.add('pearl-cursor');
      pearl.classList.add('is-visible');
      shown = true;
      return;
    }
    if (reduce.matches) { x = tx; y = ty; draw(); return; }
    if (!raf) raf = requestAnimationFrame(tick);
  }

  function onOver(e) {
    pearl.classList.toggle('is-hover', isClickable(e.target));
    pearl.classList.toggle('is-text', isText(e.target));
  }
  function onOut(e) {
    if (!e.relatedTarget) hide();            // left the window (or into a frame)
  }
  function hide() {
    if (!shown) return;
    pearl.classList.remove('is-visible', 'is-down');
    root.classList.remove('pearl-cursor');
    shown = false;
  }
  function onDown(e) { if (!e.pointerType || e.pointerType === 'mouse') pearl.classList.add('is-down'); }
  function onUp() { pearl.classList.remove('is-down'); }

  function start() {
    if (on) return;
    on = true;
    if (!pearl) build();
    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseout', onOut, { passive: true });
    document.addEventListener('pointerdown', onDown, { passive: true });
    document.addEventListener('pointerup', onUp, { passive: true });
    window.addEventListener('blur', hide);
  }
  function stop() {
    if (!on) return;
    on = false;
    document.removeEventListener('pointermove', onMove);
    document.removeEventListener('mouseover', onOver);
    document.removeEventListener('mouseout', onOut);
    document.removeEventListener('pointerdown', onDown);
    document.removeEventListener('pointerup', onUp);
    window.removeEventListener('blur', hide);
    hide();
    if (raf) { cancelAnimationFrame(raf); raf = 0; }
  }

  function sync() { if (fine.matches) start(); else stop(); }

  function init() {
    sync();
    if (fine.addEventListener) fine.addEventListener('change', sync);
    else if (fine.addListener) fine.addListener(sync);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
