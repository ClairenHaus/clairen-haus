(function(){
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;
  var $ = function(s,c){return (c||document).querySelector(s)}, $$ = function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};

  // headline: split into words for the staggered blur-in reveal
  $$('.hero .display').forEach(function(h){
    $$('.ln', h).forEach(function(ln){
      var cls = ln.className;
      var words = ln.textContent.trim().split(/\s+/);
      ln.innerHTML = words.map(function(w){ return '<span class="word">'+w.replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</span>'; }).join(' ');
    });
    $$('.word', h).forEach(function(w,i){ w.style.transitionDelay = (0.08 + i*0.085)+'s'; });
  });
  $$('.hero-art .chip').forEach(function(c,i){ c.style.transitionDelay = (1.1 + i*0.18)+'s'; });

  // nav goes solid after the hero starts scrolling
  var nav = $('.nav-wrap');
  function navState(){ if (nav) nav.classList.toggle('solid', window.scrollY > 40); }

  // segmented controls
  function setSeg(seg, val){
    var t = $(seg.getAttribute('data-target'));
    $$('button', seg).forEach(function(b){ b.setAttribute('aria-pressed', String(b.getAttribute('data-val')===val)); });
    if (t){ t.setAttribute('data-mode', val); var tc = seg.getAttribute('data-toggle-class'); if (tc) t.classList.toggle(tc, val==='b'); }
  }
  $$('.seg').forEach(function(seg){ $$('button', seg).forEach(function(b){ b.addEventListener('click', function(){ seg._touched = true; setSeg(seg, b.getAttribute('data-val')); }); }); });
  $$('.scale').forEach(function(sc){
    var bs = $$('button', sc), out = $(sc.getAttribute('data-out'));
    function pick(i){ bs.forEach(function(b,j){ b.setAttribute('aria-pressed', String(j===i)); b.classList.toggle('lit', j<i); }); if (out) out.textContent = 'Stage ' + (i+1) + ' of ' + bs.length; }
    bs.forEach(function(b,i){ b.addEventListener('click', function(){ sc._touched = true; pick(i); }); });
    sc._pick = pick;
  });

  var hero = $('.hero');
  function showAll(){
    if (hero) hero.classList.add('in');
    $$('.reveal').forEach(function(el){ el.classList.add('in'); });
    $$('.story').forEach(function(st){ for (var i=1;i<=6;i++) st.classList.add('s'+i); });
    $$('.beats li').forEach(function(li){ li.classList.add('past'); });
    $$('.path > li').forEach(function(li){ li.classList.add('lit'); });
    $$('.trk span').forEach(function(s){ s.classList.add('done'); });
  }
  window.addEventListener('scroll', navState, {passive:true}); navState();
  if (reduce || !hasIO){ showAll(); return; }

  requestAnimationFrame(function(){ requestAnimationFrame(function(){ if (hero) hero.classList.add('in'); }); });

  // slideshow inside the hero frame
  $$('.slides').forEach(function(sl){
    var items = $$(':scope > *', sl), cap = $(sl.getAttribute('data-cap')), i = 0;
    if (items.length < 2) return;
    items[0].classList.add('on');
    setInterval(function(){
      items[i].classList.remove('on'); i = (i+1) % items.length; items[i].classList.add('on');
      if (cap) cap.textContent = items[i].getAttribute('data-cap') || '';
    }, 3800);
  });

  // reveals with stagger inside groups
  $$('.works,.fixes,.steps,.ev-list,.pager-grid,.phases,.bench-row').forEach(function(g){ $$('.reveal', g).forEach(function(el,i){ el.style.transitionDelay = (i*0.09)+'s'; }); });
  var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); }, {rootMargin:'0px 0px -8% 0px', threshold:0.06});
  $$('.reveal').forEach(function(el){ io.observe(el); });

  // the scroll story: on desktop the beat in the middle of the screen drives the pinned window;
  // on phones the window plays through the same steps on its own when it comes into view
  $$('.story').forEach(function(st){
    var beats = $$('.beats li', st);
    function apply(n){
      beats.forEach(function(li,i){ li.classList.toggle('on', i===n); li.classList.toggle('past', i<n); });
      for (var i=1;i<=6;i++) st.classList.toggle('s'+i, i<=n+1);
      var lim = parseInt(st.getAttribute('data-trk-'+(n+1))||'-1',10);
      if (lim >= 0) $$('.trk span', st).forEach(function(s,i){ s.classList.toggle('done', i<lim); });
      var now = $('.trk-now em', st), lab = st.getAttribute('data-now-'+(n+1)); if (now && lab) now.textContent = lab;
      var hook = st.getAttribute('data-seg-'+(n+1)); if (hook){ var p = hook.split(':'); var sg = $(p[0]); if (sg && !sg._touched) setSeg(sg, p[1]); }
      var sc = st.getAttribute('data-scale-'+(n+1)); if (sc){ var s2 = $('.scale', st); if (s2 && s2._pick && !s2._touched) s2._pick(parseInt(sc,10)); }
    }
    if (window.innerWidth < 1000){
      st.classList.add('auto');
      var win = $('.window', st), played = false;
      var wo = new IntersectionObserver(function(es){ es.forEach(function(e){
        if (!e.isIntersecting || played) return; played = true; wo.disconnect();
        beats.forEach(function(_,i){ setTimeout(function(){ apply(i); }, 500 + i*1500); });
      }); }, {threshold:0.55});
      if (win) wo.observe(win);
      return;
    }
    var bo = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting) apply(beats.indexOf(e.target)); }); }, {rootMargin:'-45% 0px -45% 0px'});
    beats.forEach(function(li){ bo.observe(li); });
  });

  // journey path nodes light as they pass the middle of the screen
  var po = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('lit'); po.unobserve(e.target); } }); }, {rootMargin:'0px 0px -42% 0px'});
  $$('.path > li').forEach(function(li){ po.observe(li); });

  // auto-demo a control the first time it is seen (stops if the visitor taps it)
  var ao = new IntersectionObserver(function(es){ es.forEach(function(e){ if (!e.isIntersecting) return; ao.unobserve(e.target);
    var el = e.target, seq = (el.getAttribute('data-demo')||'').split(',');
    seq.forEach(function(v,i){ setTimeout(function(){ if (el._touched) return; if (el.classList.contains('scale')) el._pick(parseInt(v,10)); else setSeg(el, v); }, 900 + i*1400); });
  }); }, {threshold:0.6});
  $$('[data-demo]').forEach(function(el){ ao.observe(el); });

  // scroll-scrubbed --p
  var scrub = $$('[data-scrub]'), bar = $('.progress span'), ticking = false;
  var rail = $$('.rail a'), secs = rail.map(function(a){ return $(a.getAttribute('href')); });
  function frame(){
    ticking = false;
    var vh = window.innerHeight;
    scrub.forEach(function(el){
      var r = el.getBoundingClientRect(), mode = el.getAttribute('data-scrub'), p;
      if (mode === 'through') p = (vh - r.top) / (vh + r.height);
      else if (mode === 'fill') p = (vh*0.58 - r.top) / Math.max(1, r.height);
      else p = (vh - r.top) / (vh*0.6);
      p = Math.max(0, Math.min(1, p));
      el.style.setProperty('--p', p.toFixed(3));
      if (el.classList.contains('scatter')) el.classList.toggle('fixed', p > .9);
    });
    if (bar){ var d = document.documentElement; bar.style.setProperty('--p', (d.scrollTop / Math.max(1, d.scrollHeight - vh)).toFixed(4)); }
    var cur = -1; secs.forEach(function(s,i){ if (s && s.getBoundingClientRect().top < vh*0.4) cur = i; });
    rail.forEach(function(a,i){ a.classList.toggle('on', i===cur); });
  }
  function onScroll(){ if (!ticking){ ticking = true; requestAnimationFrame(frame); } }
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);
  frame();
})();
