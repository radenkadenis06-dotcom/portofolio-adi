(function(){
var d=document.getElementById('lb'),i=d.querySelector('img');
document.querySelectorAll('.mosaic img').forEach(function(m){
m.addEventListener('click',function(){i.src=m.src;i.alt=m.alt;d.showModal()});
});
d.addEventListener('click',function(){d.close()});
})();
