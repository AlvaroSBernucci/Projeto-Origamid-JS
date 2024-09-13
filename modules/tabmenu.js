export default function initTab(){
  const animaisImagens = document.querySelectorAll('.animais-lista img');
  const animaisSecao = document.querySelectorAll('.animais-descricao section');
    if(animaisSecao.length && animaisImagens.length){
    animaisSecao[0].classList.add(animaisSecao[0].dataset.anime);
      function adicionarClasse(index){
        animaisSecao.forEach((secao) => {
          secao.classList.remove(secao.dataset.anime);
        });
        animaisSecao[index].classList.add(animaisSecao[index].dataset.anime);
      }
  
      animaisImagens.forEach((imagem,index) =>{
        imagem.addEventListener('click',(() =>  adicionarClasse(index)));
      })
    }
  }
  
  initTab();