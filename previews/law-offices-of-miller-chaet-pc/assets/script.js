(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.focus();}});}
  var f=document.getElementById('contact-form');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();var s=f.querySelector('.form-status');if(s){s.textContent='Preview only: nothing was sent. On the live site this note would reach the office. For now, call 678-746-2900.';}});}
})();
