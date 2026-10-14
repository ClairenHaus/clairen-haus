(function(){var b=document.querySelector('.menu-btn'),n=document.getElementById('nav');if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false')})}
var f=document.getElementById('contact-form');if(f){f.addEventListener('submit',function(e){e.preventDefault();var s=f.querySelector('.status');if(s){s.classList.add('show');s.focus()}})}
var y=document.querySelectorAll('[data-year]');for(var i=0;i<y.length;i++){y[i].textContent=new Date().getFullYear()}})();
