(function(){
var b=document.querySelector('.menu-btn'),n=document.getElementById('site-nav');
if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});}
var f=document.querySelector('form[data-preview]');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var s=document.getElementById('form-status');if(s){s.hidden=false;s.focus();}});}
var y=document.getElementById('year');if(y){y.textContent=new Date().getFullYear();}
})();