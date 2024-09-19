import outsideClick from "./outsideclick.js";
export default class MenuMobile{
  constructor(menuBtn, menuUl){
    this.menuBtn = document.querySelector(menuBtn);
    this.menuUl = document.querySelector(menuUl);
    this.events = ['click','touchstart'];
    this.activeClass = 'ativo';

    this.ativarMenu = this.ativarMenu.bind(this);
  }
  ativarMenu(event){
    event.preventDefault();
    this.menuUl.classList.add(this.activeClass);
    this.menuBtn.classList.add(this.activeClass);
    outsideClick(this.menuUl,this.events, () => {
      this.menuUl.classList.remove(this.activeClass);
      this.menuBtn.classList.remove(this.activeClass);
    })
  }
  addEventMenu(){
    this.events.forEach(evento => this.menuBtn.addEventListener(evento,this.ativarMenu));
  }
  // eventos.forEach(evento => menuBtn.addEventListener(evento,ativarMenu))
  init(){
    if (this.menuBtn && this.menuUl) this.addEventMenu();
    return this;
  }
}



