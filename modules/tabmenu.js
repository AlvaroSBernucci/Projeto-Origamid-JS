export default class TabMenu{
  constructor(imagens, secoes){
    this.imagens = document.querySelectorAll(imagens);
    this.secoes = document.querySelectorAll(secoes);

    this.adicionarClasse = this.adicionarClasse.bind(this);
  }
  
  adicionarClasse(index){
    this.secoes.forEach((secao) => {
      secao.classList.remove(secao.dataset.anime);
    });
    this.secoes[index].classList.add(this.secoes[index].dataset.anime);
  }
  addEventTabMenu(){
    this.secoes[0].classList.add(this.secoes[0].dataset.anime);
    this.imagens.forEach((imagem,index) =>{
      imagem.addEventListener('click',(() =>  this.adicionarClasse(index)));
    })
  }
  init(){
    this.addEventTabMenu();
    return this;
  }
}
