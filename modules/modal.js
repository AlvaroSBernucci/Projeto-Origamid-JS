export default class Modal{
  constructor(container,btnAbrir,btnFechar){
    this.container = document.querySelector(container);
    this.btnAbrir = document.querySelector(btnAbrir);
    this.btnFechar = document.querySelector(btnFechar);

    this.abrirModal = this.abrirModal.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
  }
  abrirModal(event){
    event.preventDefault();
    this.toggleModal();
  }
  toggleModal(){
    this.container.classList.toggle('ativo');
  }
  fecharModal(event){
    if(event.target === this.container)
    this.toggleModal(event);  
  }
  addEventToggle(){
    this.btnAbrir.addEventListener('click',this.abrirModal);
    this.btnFechar.addEventListener('click', this.abrirModal);
    this.container.addEventListener('click',this.fecharModal);
  }
  init(){
    if (this.container && this.btnAbrir && this.btnFechar){
      this.addEventToggle();
    }
    return this;
  }
}