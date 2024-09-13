export default function initModal(){
  const modalContainer = document.querySelector('[data-modal="modal-container"]');
  const login = document.querySelector('[data-modal="botaologin"]');
  const fecharLogin = document.querySelector('[data-modal="fechar"]');

  if(modalContainer && login && fecharLogin){
    function abrirModal(event){
      event.preventDefault();
      modalContainer.classList.toggle('ativo');
    }

    function fecharModal(event){
      if(event.target === this)
      abrirModal(event);  
    }



    login.addEventListener('click',abrirModal);
    fecharLogin.addEventListener('click',fecharModal);
    modalContainer.addEventListener('click',fecharModal);
  }
}