(function(){var b=document.querySelector('.menu-btn'),n=document.getElementById('nav');if(b&&n){b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));document.body.classList.toggle('nav-open',!o);});}
document.querySelectorAll('form[data-preview]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var m=f.querySelector('.form-note');if(m){m.hidden=false;m.focus();}});});
document.querySelectorAll('details.faq').forEach(function(d){});
})();