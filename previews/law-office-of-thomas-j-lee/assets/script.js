(function(){document.documentElement.classList.remove('no-js');
var b=document.querySelector('.menu-btn'),n=document.getElementById('site-nav');
if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&n.classList.contains('open')){n.classList.remove('open');b.setAttribute('aria-expanded','false');b.focus();}});}
var f=document.getElementById('contact-form');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var m=document.getElementById('form-msg');if(m){m.classList.add('show');m.focus();}});}
var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
})();