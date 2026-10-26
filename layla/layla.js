(function(){
  var v=document.getElementById('hook'),s=document.getElementById('sound');
  var a=document.getElementById('call'),p=document.getElementById('play'),bar=document.getElementById('bar'),fill=document.getElementById('fill'),cur=document.getElementById('cur');
  var hear=document.querySelector('.hear');
  function fmt(t){t=Math.floor(t||0);return Math.floor(t/60)+':'+('0'+t%60).slice(-2)}
  function setSound(on){
    v.muted=!on;s.setAttribute('aria-pressed',on?'true':'false');
    s.textContent=on?'Sound on':'Tap for sound';
  }
  s.addEventListener('click',function(){
    if(v.muted){ if(!a.paused){a.pause()} v.currentTime=0; setSound(true); var r=v.play(); if(r&&r.catch)r.catch(function(){}); }
    else setSound(false);
  });
  v.addEventListener('click',function(){ s.click(); });
  var r0=v.play(); if(r0&&r0.catch)r0.catch(function(){});

  p.addEventListener('click',function(){
    if(a.paused){ if(!v.muted)setSound(false); a.play(); } else a.pause();
  });
  function state(on){
    p.classList.toggle('on',on);hear.classList.toggle('on',on);
    p.setAttribute('aria-label',on?'Pause the call':'Play the call');
    
  }
  a.addEventListener('play',function(){state(true)});
  a.addEventListener('pause',function(){state(false)});
  a.addEventListener('ended',function(){state(false)});
  a.addEventListener('timeupdate',function(){
    var d=a.duration||162;fill.style.width=(a.currentTime/d*100)+'%';cur.textContent=fmt(a.currentTime);bar.setAttribute('aria-valuenow',Math.floor(a.currentTime));
  });
  function seek(x){var r=bar.getBoundingClientRect();var f=Math.min(1,Math.max(0,(x-r.left)/r.width));var d=a.duration||162;try{a.currentTime=f*d}catch(e){} if(a.paused){if(!v.muted)setSound(false);a.play()}}
  bar.addEventListener('click',function(e){seek(e.clientX)});
  bar.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){a.currentTime=Math.min((a.duration||162),a.currentTime+5)}if(e.key==='ArrowLeft'){a.currentTime=Math.max(0,a.currentTime-5)}});


  // ---- How Layla handles a call: interactive path ----
  (function(){
    var flow=document.querySelector('.flow'),call=document.getElementById('call-flow');
    if(!flow||!call)return;
    var steps=[].slice.call(call.querySelectorAll('.st')),rail=call.querySelector('.rail'),fill=call.querySelector('.rail-fill');
    var btns=[].slice.call(flow.querySelectorAll('.seg button'));
    var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var timers=[],started=false;
    function place(){
      var c=call.getBoundingClientRect(),d=steps.map(function(s){return s.querySelector('.dot').getBoundingClientRect()});
      var a=d[0],z=d[d.length-1],vertical=Math.abs(z.left-a.left)<4;
      var ax=a.left+a.width/2-c.left,ay=a.top+a.height/2-c.top,zx=z.left+z.width/2-c.left,zy=z.top+z.height/2-c.top;
      rail.style.left=(vertical?ax-1.5:ax)+'px';rail.style.top=(vertical?ay:ay-1.5)+'px';
      rail.style.width=(vertical?3:zx-ax)+'px';rail.style.height=(vertical?zy-ay:3)+'px';rail.style.right='auto';rail.style.bottom='auto';
    }
    function setP(i){fill.style.setProperty('--p',steps.length>1?i/(steps.length-1):1)}
    function clear(){timers.forEach(clearTimeout);timers=[]}
    function play(mode){
      clear();started=true;
      call.setAttribute('data-mode',mode);
      btns.forEach(function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-mode')===mode))});
      place();
      if(reduce){steps.forEach(function(s){s.classList.add('lit');s.classList.remove('cur')});setP(steps.length-1);flow.classList.remove('armed');return}
      flow.classList.add('armed');
      steps.forEach(function(s){s.classList.remove('lit','cur')});setP(0);
      steps.forEach(function(s,i){
        timers.push(setTimeout(function(){
          steps.forEach(function(o){o.classList.remove('cur')});
          s.classList.add('lit','cur');setP(i);
        },250+i*650));
      });
      timers.push(setTimeout(function(){steps.forEach(function(s){s.classList.add('lit');s.classList.remove('cur')});setP(steps.length-1);flow.classList.remove('armed')},250+steps.length*650+900));
    }
    btns.forEach(function(b){b.addEventListener('click',function(){play(b.getAttribute('data-mode'))})});
    steps.forEach(function(s){
      s.addEventListener('click',function(){var on=s.classList.contains('cur');steps.forEach(function(o){o.classList.remove('cur')});if(!on)s.classList.add('cur')});
    });
    window.addEventListener('resize',place);
    if(document.fonts&&document.fonts.ready)document.fonts.ready.then(place);
    place();
    // autoplay once when the path comes into view (or has already been scrolled past)
    function check(){
      if(started)return;
      var r=call.getBoundingClientRect(),vh=window.innerHeight;
      if(r.top<vh*0.72){play(call.getAttribute('data-mode')||'urgent');window.removeEventListener('scroll',onS)}
    }
    var tk=false;function onS(){if(!tk){tk=true;requestAnimationFrame(function(){tk=false;check()})}}
    window.addEventListener('scroll',onS,{passive:true});check();
  })();

  // reveal once, staggered inside each section
  var els=[].slice.call(document.querySelectorAll('[data-reveal]'));
  document.querySelectorAll('section').forEach(function(sec){
    var i=0;sec.querySelectorAll('[data-reveal]').forEach(function(el){el.style.setProperty('--d',(i++*80)+'ms')});
  });
  // Reveal anything whose top has reached the lower part of the screen, including
  // anything already scrolled past (fast scroll, anchor jumps). Nothing can stay hidden.
  window.__rv=1;
  var pending=els.slice(),ticking=false;
  function check(){
    var vh=window.innerHeight||document.documentElement.clientHeight;
    var atEnd=(window.scrollY+vh)>=document.documentElement.scrollHeight-4;
    pending=pending.filter(function(el){
      if(atEnd||el.getBoundingClientRect().top<vh*0.92){el.classList.add('is-in');return false}
      return true;
    });
    if(!pending.length){window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll)}
  }
  function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(function(){ticking=false;check()})}}
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',onScroll);
  window.addEventListener('load',check);
  check();
})();

// One Layla, every trade: pinned scroll swap (plumbing, HVAC, electrical). Static cards when motion is reduced.
(function(){
  var sec=document.getElementById('trades');if(!sec||!window.requestAnimationFrame)return;
  var panels=[].slice.call(sec.querySelectorAll('.tr-panel')),n=panels.length;
  var words=panels.map(function(p){return p.querySelector('.tr-word span')});
  var ticks=panels.map(function(p){return [].slice.call(p.querySelectorAll('.tr-ticks li'))});
  var mq=window.matchMedia?window.matchMedia('(prefers-reduced-motion: reduce)'):{matches:false};
  var hdr=document.querySelector('.site-header'),on=false,cur=-1,raf=0,stageW=0;
  function short(){return window.innerHeight<540}
  function fit(){
    stageW=sec.clientWidth;var h=sec.querySelector('.tr-panels').clientHeight||window.innerHeight*.6;
    words.forEach(function(w,i){
      var el=panels[i].querySelector('.tr-word');el.style.setProperty('--fs','100px');
      var ww=w.scrollWidth||1,fs=Math.min(100*stageW*(stageW<=760?.9:.94)/ww,h*(stageW<=760?.2:.62));
      el.style.setProperty('--fs',Math.round(fs)+'px');
    });
  }
  function setHdr(){
    var hh=0;if(hdr){var cs=getComputedStyle(hdr);if(cs.position==='sticky'||cs.position==='fixed')hh=hdr.getBoundingClientRect().height}
    sec.style.setProperty('--hdr',Math.round(hh)+'px');
  }
  function show(i){
    if(i===cur)return;cur=i;sec.setAttribute('data-t',i);
    panels.forEach(function(p,j){p.classList.toggle('on',j===i);p.setAttribute('aria-hidden',j===i?'false':'true')});
  }
  function frame(){
    raf=0;if(!on)return;
    var r=sec.getBoundingClientRect(),span=r.height-(window.innerHeight-(parseFloat(sec.style.getPropertyValue('--hdr'))||0));
    var p=span>0?Math.min(1,Math.max(0,-r.top/span)):0,f=p*n;
    show(Math.min(n-1,Math.floor(f)));
    for(var i=0;i<n;i++){
      var d=f-i-.5;
      words[i].style.setProperty('--x',(-d*stageW*(stageW<=760?.08:.2)).toFixed(1)+'px');
      var k=Math.max(0,Math.min(4,1+Math.floor((d+.5)*4.6)));
      ticks[i].forEach(function(li,j){li.classList.toggle('lit',j<k)});
    }
  }
  function req(){if(!raf)raf=requestAnimationFrame(frame)}
  function arm(){
    var want=!mq.matches&&!short();
    if(want===on){if(on){setHdr();fit();req()}return}
    on=want;sec.classList.toggle('is-pinned',on);
    if(on){setHdr();fit();cur=-1;req()}
    else{sec.removeAttribute('data-t');panels.forEach(function(p){p.classList.remove('on');p.removeAttribute('aria-hidden')});
      words.forEach(function(w){w.style.removeProperty('--x')});ticks.forEach(function(t){t.forEach(function(li){li.classList.add('lit')})})}
  }
  sec.querySelectorAll('[data-go]').forEach(function(b){
    b.addEventListener('click',function(){
      var i=+b.getAttribute('data-go'),r=sec.getBoundingClientRect(),hh=parseFloat(sec.style.getPropertyValue('--hdr'))||0;
      var span=r.height-(window.innerHeight-hh),y=window.pageYOffset+r.top+span*((i+.5)/n);
      window.scrollTo({top:y,behavior:'smooth'});
    });
  });
  window.addEventListener('scroll',req,{passive:true});
  var rt;window.addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(arm,120)});
  if(mq.addEventListener)mq.addEventListener('change',arm);else if(mq.addListener)mq.addListener(arm);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){if(on){fit();req()}});
  ticks.forEach(function(t){t.forEach(function(li){li.classList.add('lit')})});
  arm();
})();
