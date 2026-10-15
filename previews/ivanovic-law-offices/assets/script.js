(function(){var b=document.querySelector('.menu-btn'),n=document.getElementById('nav');if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});}
var f=document.querySelector('form.preview');if(f){f.addEventListener('submit',function(e){e.preventDefault();var m=f.querySelector('.form-msg');if(m){m.classList.add('show');m.focus();}});}
var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();})();
