export default function initAccordion(){
  const perguntasFaq = document.querySelectorAll('.faq-lista dt');

  function respFaq(pergunta){
      pergunta.nextElementSibling.classList.toggle(pergunta.dataset.anime)
      pergunta.classList.toggle(pergunta.dataset.anime)
  }
  
  
  perguntasFaq.forEach((pergunta) => {
    pergunta.addEventListener('click',(() => {
      respFaq(pergunta);
    }))
  });
}