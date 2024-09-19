import AnimaNumeros from './numerosanimados.js';
export default function fetchAnimais(url, target){
  
  function createAnimal(animal){
    const div = document.createElement('div');
    div.classList.add('numeros-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span>${animal.total}</span>`;
    return div
  }
  
  
  const numerosGrid = document.querySelector(target);
  function appendAnimal(animal){
    const divAnimais = createAnimal(animal)
    numerosGrid.appendChild(divAnimais);
  }

  function animaAnimaisNumeros(){
    const animaNumeros = new AnimaNumeros('.numeros-animal span','ativo','.numeros');
    animaNumeros.init();
  }
  
  async function initFetchAnimais(){
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      animaisJSON.forEach((animal) =>{
        appendAnimal(animal);
        animaAnimaisNumeros();
      })

    } catch (erro) {
      console.log(erro);
    }
  };

  return initFetchAnimais();
}
