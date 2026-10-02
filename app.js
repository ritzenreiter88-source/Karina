'use strict';
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reducedMotion&&'IntersectionObserver' in window){document.documentElement.classList.add('js-motion');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:0.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}
const wishes=[
'Dass du immer einen Grund zum Lächeln findest.',
'Dass sich dein Zuhause immer nach Geborgenheit anfühlt.',
'Dass du Menschen um dich hast, die dich so lieben, wie du bist.',
'Dass aus „Irgendwann“ ganz oft „Jetzt“ wird.',
'Dass du Orte entdeckst, die dein Herz weit machen.',
'Dass dir die kleinen Dinge weiterhin große Freude machen.',
'Dass du mutig genug bleibst, deinen eigenen Weg zu gehen.',
'Dass es immer jemanden gibt, mit dem du Tränen lachen kannst.',
'Dass du gesund bleibst und dich in deiner Haut wohlfühlst.',
'Dass deine schönsten Pläne manchmal noch übertroffen werden.',
'Dass du dir Pausen gönnst, ohne dich dafür zu rechtfertigen.',
'Dass dein Leben voller guter Gespräche ist.',
'Dass du öfter barfuß durch den Sommer tanzt.',
'Dass du auch an grauen Tagen dein Leuchten nicht vergisst.',
'Dass du dich immer wieder neu verliebst – ins Leben.',
'Dass du den Mut hast, auch mal Nein zu sagen.',
'Dass es noch unzählige Abende gibt, die viel zu schnell vergehen.',
'Dass du stolz auf die Frau bist, die du geworden bist.',
'Dass Abenteuer auf dich warten, von denen du heute noch nichts ahnst.',
'Dass du Zeit für die Menschen findest, die dir guttun.',
'Dass du dir selbst mit genauso viel Liebe begegnest wie anderen.',
'Dass deine Lieblingslieder immer im richtigen Moment laufen.',
'Dass du nie aufhörst, neugierig zu sein.',
'Dass das Glück dich auch in ganz gewöhnlichen Momenten findet.',
'Dass du deine Erfolge feierst – die großen und die kleinen.',
'Dass du Erinnerungen sammelst, die sich wie Sonnenschein anfühlen.',
'Dass du immer einen Menschen hast, den du anrufen kannst.',
'Dass in deinem Kalender genug Platz für dich selbst bleibt.',
'Dass dein nächstes Kapitel noch schöner wird, als du es dir ausmalst.',
'Dass du immer weißt: Wie schön, dass es dich gibt.'
];
let wishIndex=0;const wishText=document.getElementById('wish-text');function updateWish(){wishText.textContent=wishes[wishIndex];document.getElementById('wish-count').textContent=String(wishIndex+1).padStart(2,'0')+' / 30';document.getElementById('wish-progress').style.width=((wishIndex+1)/30*100)+'%';document.getElementById('prev-wish').disabled=wishIndex===0;document.getElementById('next-wish').textContent=wishIndex===29?'Noch einmal':'Nächster Wunsch'}
document.getElementById('next-wish').addEventListener('click',()=>{wishIndex=(wishIndex+1)%30;updateWish();if(wishIndex===29)celebrate()});document.getElementById('prev-wish').addEventListener('click',()=>{wishIndex=Math.max(0,wishIndex-1);updateWish()});
const photoDialog=document.getElementById('photo-dialog');const photoButtons=[...document.querySelectorAll('[data-photo]')];let photoIndex=0;function showPhoto(){const source=photoButtons[photoIndex].querySelector('img');const large=document.getElementById('large-photo');large.src=source.src;large.alt=source.alt;document.getElementById('photo-number').textContent=String(photoIndex+1).padStart(2,'0')+' / '+String(photoButtons.length).padStart(2,'0')}
photoButtons.forEach((button,index)=>button.addEventListener('click',()=>{photoIndex=index;showPhoto();photoDialog.showModal()}));function movePhoto(step){photoIndex=(photoIndex+step+photoButtons.length)%photoButtons.length;showPhoto()}
document.getElementById('prev-photo').addEventListener('click',()=>movePhoto(-1));document.getElementById('next-photo').addEventListener('click',()=>movePhoto(1));photoDialog.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();movePhoto(-1)}if(event.key==='ArrowRight'){event.preventDefault();movePhoto(1)}});
let touchStart=0;photoDialog.addEventListener('touchstart',e=>{touchStart=e.changedTouches[0].screenX},{passive:true});photoDialog.addEventListener('touchend',e=>{const dx=e.changedTouches[0].screenX-touchStart;if(Math.abs(dx)>60)movePhoto(dx<0?1:-1)},{passive:true});
document.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>document.getElementById(button.dataset.close).close()));document.querySelectorAll('dialog').forEach(dialog=>dialog.addEventListener('click',e=>{if(e.target===dialog){const rect=dialog.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)dialog.close()}}));
const letter=document.getElementById('letter-dialog');document.getElementById('open-letter').addEventListener('click',()=>{letter.showModal();letter.scrollTop=0});document.getElementById('letter-celebrate').addEventListener('click',()=>{letter.close();celebrate()});document.getElementById('more-confetti').addEventListener('click',celebrate);
const canvas=document.getElementById('confetti');const ctx=canvas.getContext('2d');let frame=0;function celebrate(){if(reducedMotion||!ctx)return;cancelAnimationFrame(frame);const w=innerWidth,h=innerHeight;const scale=Math.min(devicePixelRatio||1,2);canvas.width=w*scale;canvas.height=h*scale;ctx.setTransform(scale,0,0,scale,0,0);const colors=['#daba85','#f3ebdf','#ab6677','#f3d6ab','#b38b4d'];const particles=Array.from({length:150},()=>({x:Math.random()*w,y:-30-Math.random()*h*.6,s:3+Math.random()*5,v:2+Math.random()*3,drift:Math.random()*2-1,rotation:Math.random()*6.28,spin:Math.random()*.1-.05,color:colors[Math.floor(Math.random()*colors.length)]}));let last=performance.now(),elapsed=0;function draw(now){const dt=Math.min((now-last)/16.67,3);last=now;elapsed+=dt;ctx.clearRect(0,0,w,h);particles.forEach(p=>{p.y+=p.v*dt;p.x+=p.drift*dt;p.rotation+=p.spin*dt;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rotation);ctx.fillStyle=p.color;ctx.globalAlpha=Math.max(0,Math.min(1,(360-elapsed)/60));ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s*.5);ctx.restore()});if(elapsed<360)frame=requestAnimationFrame(draw);else ctx.clearRect(0,0,w,h)}frame=requestAnimationFrame(draw)}
