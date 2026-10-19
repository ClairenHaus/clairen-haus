(function () {
  var a = document.getElementById('au'), b = document.getElementById('pb');
  if (!a || !b) return;
  var p = document.getElementById('prog'), bar = document.getElementById('bar'), cur = document.getElementById('cur'), tx = document.getElementById('tx');
  var ls = [].slice.call(tx.querySelectorAll('.ln')), last = -1;
  function f(s) { s = Math.max(0, s | 0); return (s / 60 | 0) + ':' + ('0' + s % 60).slice(-2); }
  b.addEventListener('click', function () { if (a.paused) { a.play(); } else { a.pause(); } });
  a.addEventListener('play', function () { b.innerHTML = '&#10074;&#10074;'; b.setAttribute('aria-label', 'Pause the sample call'); tx.classList.remove('idle'); });
  a.addEventListener('pause', function () { b.innerHTML = '&#9654;'; b.setAttribute('aria-label', 'Play the sample call'); });
  a.addEventListener('ended', function () { b.innerHTML = '&#8635;'; b.setAttribute('aria-label', 'Play the sample call again'); tx.classList.add('idle'); });
  bar.addEventListener('click', function (e) { var r = bar.getBoundingClientRect(); if (a.duration) a.currentTime = (e.clientX - r.left) / r.width * a.duration; });
  ls.forEach(function (l) { l.addEventListener('click', function () { a.currentTime = +l.dataset.s; if (a.paused) a.play(); }); });
  a.addEventListener('timeupdate', function () {
    var t = a.currentTime, idx = -1;
    if (a.duration) { var pc = t / a.duration * 100; p.style.width = pc + '%'; bar.setAttribute('aria-valuenow', Math.round(pc)); }
    cur.textContent = f(t);
    ls.forEach(function (l, i) { var s = +l.dataset.s; l.classList.toggle('past', s <= t); if (s <= t) idx = i; l.classList.remove('now'); });
    if (idx >= 0) { ls[idx].classList.add('now'); if (idx !== last) { last = idx; var el = ls[idx]; tx.scrollTop = el.offsetTop - tx.offsetTop - tx.clientHeight / 2 + el.clientHeight / 2; } }
  });
  // one video at a time
  var vids = [].slice.call(document.querySelectorAll('.la-ad video'));
  vids.forEach(function (v) { v.addEventListener('play', function () { a.pause(); vids.forEach(function (o) { if (o !== v) o.pause(); }); }); });
  a.addEventListener('play', function () { vids.forEach(function (o) { o.pause(); }); });
})();
