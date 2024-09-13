import outsideClick from "./outsideclick.js";
export default function initMobileMenu(){
 
  const menuBtn = document.querySelector('.menu-btn');
  const menuUl = document.querySelector('.menu-ul');
  const eventos = ['click','touchstart'];
  if(menuBtn){
  function ativarMenu(event){
    event.preventDefault();
    menuUl.classList.add('ativo');
    menuBtn.classList.add('ativo');
    outsideClick(menuUl,eventos, () => {
      menuUl.classList.remove('ativo');
      menuBtn.classList.remove('ativo');
    })
  }
  

  eventos.forEach(evento => menuBtn.addEventListener(evento,ativarMenu))
}
}



