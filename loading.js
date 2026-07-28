window.addEventListener('load',()=>{
 const loader=document.querySelector('.loader');
 if(loader){
  loader.style.opacity='0';
  setTimeout(()=>loader.remove(),700);
 }
});