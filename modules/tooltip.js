export default function initTooltip(){

  const tooltip = document.querySelectorAll('[data-tooltip]');


  function criarTooltip(element){
    const tooltipbox = document.createElement('div');
    const texto = element.getAttribute('aria-label');
    tooltipbox.classList.add('tooltip');
    tooltipbox.innerText = texto
    document.body.appendChild(tooltipbox);
    return tooltipbox
  }


  function movimentarTooltip(event){
    const tooltipbox = criarTooltip(this);

    onMouseMove.tooltipbox = tooltipbox;
    this.addEventListener('mousemove',onMouseMove);

    onMouseLeave.tooltipbox = tooltipbox;
    onMouseLeave.element = this;

    this.addEventListener('mouseleave',onMouseLeave);
  }

  const onMouseLeave = {
    handleEvent(){
      this.tooltipbox.remove();
      this.element.removeEventListener('mouseleave',onMouseLeave);
    }
  }
  const onMouseMove = {
    handleEvent(event){
      this.tooltipbox.style.top = event.pageY + 10 + 'px';
      this.tooltipbox.style.left = event.pageX + 10 + 'px';
    }
  }



  tooltip.forEach((item) =>{
    item.addEventListener('mouseover',movimentarTooltip);
  })

}