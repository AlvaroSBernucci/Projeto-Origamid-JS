import initAnimaNumeros from './numerosanimados.js';
export default function initFetch(){

  async function fetchAnimais(url){
    const animaisResponse = await fetch(url);
    const animaisJSON = await animaisResponse.json();
    const numerosGrid = document.querySelector('.numeros-grid')
    animaisJSON.forEach((animal) =>{
      const divAnimais = createAnimal(animal)
      numerosGrid.appendChild(divAnimais);
    })
    
    initAnimaNumeros();
  }
  fetchAnimais('/fetch.json');
  
  function createAnimal(animal){
      const div = document.createElement('div');
      div.classList.add('numeros-animal');
      div.innerHTML = `<h3>${animal.specie}</h3><span>${animal.total}</span>`;
      return div
  }

}
