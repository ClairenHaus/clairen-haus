(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');btn.textContent=o?'Close':'Menu';});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.textContent='Menu';btn.focus();}});}
  var f=document.querySelector('form[data-preview]');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();var s=document.getElementById('form-status');if(s){s.textContent='This is a design preview, so nothing was sent. On the live site this form would reach the office. For now, please call (561) 455-0677 or email cpt@cptprobatelaw.com.';s.classList.add('show');s.focus();}});}
  var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
})();
