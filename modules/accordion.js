export default class Accordion{
  constructor(perguntas){
    this.perguntas = document.querySelectorAll(perguntas);
    this.animation = 'show-down';
  }
  // const perguntasFaq = document.querySelectorAll('.faq-lista dt');
  toggleAccordion(pergunta){
      pergunta.nextElementSibling.classList.toggle(this.animation)
      pergunta.classList.toggle(this.animation)
  }
  
  addEventAccordion(){
    this.perguntas.forEach((pergunta) => {
      pergunta.addEventListener('click',(() => {
        this.toggleAccordion(pergunta);
      }));
    });
  }
  init(){
    this.addEventAccordion();
    return this;
  }
}