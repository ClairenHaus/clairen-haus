(function(){
var b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.textContent=o?'Close':'Menu';});}
var f=document.querySelector('form.preview-form');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var s=f.querySelector('.form-status');if(s){s.textContent='This is a design preview, so nothing was sent. To reach the firm, call 205-939-1327 or email ciciolaw@yahoo.com.';s.classList.add('show');s.focus();}});}
})();
