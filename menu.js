const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav');
if(nav && menu){
 const btn=document.createElement('button');
 btn.className='menu-btn';
 btn.innerHTML='☰';
 nav.insertBefore(btn, menu);
 btn.onclick=()=>menu.classList.toggle('open');
}
