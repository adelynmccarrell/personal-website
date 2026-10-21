const pages=[['Home','index.html'],['About','about.html'],['Experience','experience.html'],['Contact','contact.html']];
const current=location.pathname.split('/').pop()||'index.html';
document.querySelector('#site-header').innerHTML=`<nav aria-label="Main navigation"><a class="brand" href="./index.html">Adelyn McCarrell</a><button class="menu-toggle" aria-expanded="false" aria-controls="site-links">Menu ☰</button><div class="links" id="site-links">${pages.map(([name,url])=>`<a href="./${url}" ${current===url?'aria-current="page"':''}>${name}</a>`).join('')}</div></nav>`;
const toggle=document.querySelector('.menu-toggle');toggle.addEventListener('click',()=>{const links=document.querySelector('#site-links');const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
document.querySelector('#site-footer').innerHTML=`<footer><p>© ${new Date().getFullYear()} Adelyn McCarrell · Built for Digital Marketing</p></footer>`;
