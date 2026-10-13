(function(){
  var b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
  if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});}
  var f=document.getElementById('contact-form');
  if(f){
    var show=function(e){if(e)e.preventDefault();var x=document.getElementById('form-notice');if(x){x.classList.add('show');x.focus();}};
    f.addEventListener('submit',show);
    var s=document.getElementById('form-send'); if(s){s.addEventListener('click',show);}
  }
})();
