import debounce from "./debounce.js";
export default class AnimaScroll{
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    
    this.pegarDistancias = this.pegarDistancias.bind(this);
    this.animarScroll = this.animarScroll.bind(this);
  }  

  pegarDistancias(){
    this.distancia = [...this.sections].map((secao) =>{
      const distanciaTopo = secao.offsetTop;
      return {
        element: secao,
        distanciaTopo: Math.floor(distanciaTopo - this.windowMetade),
      }
    })
  }  
  
  animarScroll(){
    this.distancia.forEach((secao) => {
      if (window.scrollY > secao.distanciaTopo) {
        secao.element.classList.add('ativo');
      } else if (secao.element.classList.contains('ativo')) {
        secao.element.classList.remove('ativo');
      }
    })
  }


  addEventScroll(){
    window.addEventListener('scroll',debounce(this.animarScroll,100));
  }
  init(){
    this.pegarDistancias();
    this.animarScroll();
    this.addEventScroll();
    return this;
  }
}