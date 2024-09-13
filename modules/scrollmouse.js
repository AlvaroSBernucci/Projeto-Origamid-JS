export default function animaScroll(){
  const scrollMouse = document.querySelectorAll('[data-scroll^="show-scroll"]');
  if(scrollMouse.length){
    const ativarScroll = window.innerHeight * 0.6;
    function scroll(){
      scrollMouse.forEach((secao) =>{
        const distancia = secao.getBoundingClientRect().top;
        if(distancia - ativarScroll < 0){
          secao.classList.add('ativo');
        }
      })
    }
    scroll();
    window.addEventListener('scroll',scroll);
  }

}