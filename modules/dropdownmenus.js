import outsideClick from "./outsideclick.js";
export default class DropDown {
  constructor (menus){
    this.menus = document.querySelectorAll(menus);
    this.events = ['click','touchstart'];

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    event.target.classList.add('active');
    outsideClick(event.target,this.events, () => {
      event.target.classList.remove('active');
    })
  }

  addEventDropDown(){
    this.menus.forEach((menu) => {
      this.events.forEach(userEvent =>{
        menu.addEventListener(userEvent,this.handleClick);
      })
    })
  }
  init(){
    if (this.menus.length) this.addEventDropDown();
    return this;
  }

}