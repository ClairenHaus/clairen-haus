(function(){
  var t=document.querySelector('.nav-toggle'),n=document.querySelector('.nav');
  if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false');});}
  var f=document.getElementById('contact-form');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();var m=document.getElementById('form-notice');if(m){m.classList.add('show');m.focus();}});}
})();
