document.querySelectorAll('a').forEach(link=>{link.addEventListener('click',()=>{console.log('Portfolio navigation')})});

const card=document.querySelector('.ai-card');
if(card){
 document.addEventListener('mousemove',(e)=>{
  const x=(window.innerWidth/2-e.clientX)/45;
  const y=(window.innerHeight/2-e.clientY)/45;
  card.style.transform=`perspective(900px) rotateY(${x}deg) rotateX(${y}deg)`;
 });
}

const avatar=document.querySelector('.avatar');
if(avatar){
 setInterval(()=>{
  avatar.style.boxShadow='0 0 70px #00d9ff';
  setTimeout(()=>avatar.style.boxShadow='0 0 45px #00d9ff',700);
 },2000);
}