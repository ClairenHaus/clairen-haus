(function(){
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;
  // stagger hero words + chips
  var words = document.querySelectorAll('.hero-title .word');
  words.forEach(function(w,i){ w.style.transitionDelay = (0.08 + i*0.09) + 's'; });
  document.querySelectorAll('.chip').forEach(function(c,i){ c.style.transitionDelay = (0.9 + i*0.15) + 's'; c.style.animationDelay = (-i*1.3) + 's'; });
  function showAll(){ document.querySelectorAll('.reveal,.hero,.hero-title,.chips').forEach(function(el){ el.classList.add('in'); }); }
  if (reduce || !('IntersectionObserver' in window)) { showAll(); return; }
  requestAnimationFrame(function(){ requestAnimationFrame(function(){
    document.querySelector('.hero').classList.add('in');
    document.querySelector('.hero-title').classList.add('in');
    document.querySelector('.chips').classList.add('in');
  });});
  // stagger siblings inside grids
  document.querySelectorAll('.cards,.fixes,.steps,.stats .wrap,.index-list,.bench-row').forEach(function(g){
    Array.prototype.forEach.call(g.querySelectorAll('.reveal'), function(el,i){ el.style.transitionDelay = (i*0.09)+'s'; });
  });
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);
        e.target.querySelectorAll && e.target.querySelectorAll('.count').forEach(count); }
    });
  }, {rootMargin:'0px 0px -8% 0px', threshold:0.08});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  function count(el){
    var to = parseInt(el.getAttribute('data-to'),10); if (!to) return;
    var t0 = null, dur = 1400;
    function step(t){ if(!t0) t0=t; var p=Math.min((t-t0)/dur,1); var e=1-Math.pow(1-p,3);
      el.textContent = Math.round(to*e); if(p<1) requestAnimationFrame(step); }
    el.textContent='0'; requestAnimationFrame(step);
  }
})();
