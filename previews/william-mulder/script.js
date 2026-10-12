
(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});}
  var form=document.querySelector('form[data-preview]');
  if(form){form.addEventListener('submit',function(e){e.preventDefault();var n=form.querySelector('.notice');if(n){n.classList.add('show');n.setAttribute('role','alert');n.scrollIntoView({block:'nearest'});}});}
  var y=document.getElementById('year');if(y){y.textContent=new Date().getFullYear();}
})();
