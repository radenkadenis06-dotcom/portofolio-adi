(function(){
var d=document.getElementById('lb'),i=d.querySelector('img');
document.querySelectorAll('.mosaic img').forEach(function(m){
m.addEventListener('click',function(){i.src=m.src;i.alt=m.alt;d.showModal()});
});
d.addEventListener('click',function(){d.close()});
})();

document.querySelectorAll('.vid[data-id]').forEach(function(v){
var b=v.querySelector('.vbtn');
b.addEventListener('click',function(){
var id=v.getAttribute('data-id'),t=v.querySelector('b').textContent;
v.classList.add('on');
v.innerHTML='<div class="frame"><iframe src="https://drive.google.com/file/d/'+id+'/preview" title="'+t+'" allow="autoplay; fullscreen" allowfullscreen></iframe></div><a class="vopen" href="https://drive.google.com/file/d/'+id+'/view" target="_blank" rel="noopener">Buka di Google Drive</a>';
if(window.applyLang)window.applyLang();
});
});
