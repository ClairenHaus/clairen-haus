(function(){
var b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});}
var f=document.getElementById('contact-form');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var s=f.querySelector('.form-status');if(s){s.textContent='This is a preview, so nothing was sent. Please call 770-751-0900 or email davidjreed@davidjreed.com.';}});}
})();
