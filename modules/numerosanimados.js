export default function initAnimaNumeros(){
  
  const numeros = document.querySelectorAll('.numeros-animal span');

  function animaNumeros(){
      numeros.forEach((numero) => {
        const numFinal = +numero.innerHTML;
        const incremento = numFinal/200;
        let somador = 0;
        const intervalo = setInterval(() => {
          somador = somador + incremento;
          numero.innerHTML = parseInt(somador);
          if(numFinal < somador){
            numero.innerHTML = numFinal;
            clearInterval(intervalo);
          }
        },);
      });
    }
    function handleMutation(mutation){
      if(mutation[0].target.classList.contains('ativo')){
        animaNumeros();
        observer.disconnect();
      }
    }
      const sectionNumeros = document.querySelector('.numeros');
      const observer = new MutationObserver(handleMutation);
      observer.observe(sectionNumeros,{attributes: true});
}