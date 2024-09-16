export default class Tooltip{
  constructor(tooltip){
    this.tooltip = document.querySelectorAll(tooltip);

    this.movimentarTooltip = this.movimentarTooltip.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }
  criarTooltip(element){
    const tooltipbox = document.createElement('div');
    const texto = element.getAttribute('aria-label');
    tooltipbox.classList.add('tooltip');
    tooltipbox.innerText = texto
    document.body.appendChild(tooltipbox);
    this.tooltipbox = tooltipbox;
  }
  
  addEventTooltip(){
    this.tooltip.forEach((item) =>{
      item.addEventListener('mouseover',this.movimentarTooltip);
    })
  }
  movimentarTooltip({currentTarget}){
    this.criarTooltip(currentTarget);
    currentTarget.addEventListener('mousemove',this.onMouseMove);
    currentTarget.addEventListener('mouseleave',this.onMouseLeave);
  }

  onMouseLeave(event){
      this.tooltipbox.remove();
      event.target.removeEventListener('mouseleave',this.onMouseLeave);
  }
  onMouseMove(event){
    this.tooltipbox.style.top = event.pageY + 10 + 'px';
      if (event.pageX + 200 > window.innerWidth){
        this.tooltipbox.style.left = event.pageX - 170 + 'px';
      } else {
        this.tooltipbox.style.left = event.pageX + 10 + 'px';
      }
  }
  init(){
    if (this.tooltip.length){
      this.addEventTooltip();
    }
    return this;
  }


  

}