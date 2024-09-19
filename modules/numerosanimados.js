export default class AnimaNumeros{

  constructor(numeros, observerClass, observeSection){
    this.numeros = document.querySelectorAll(numeros);
    this.observerClass = observerClass;
    this.observeSection = document.querySelector(observeSection);

    this.animaNumeros = this.animaNumeros.bind(this);
    this.handleMutation = this.handleMutation.bind(this);
  }
  static incrementar(numero){
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
    }
    animaNumeros(){
      this.numeros.forEach((numero) => this.constructor.incrementar(numero));
    }
    handleMutation(mutation){
      if (mutation[0].target.classList.contains(this.observerClass)){
        this.animaNumeros();
        this.observer.disconnect();
      }
    }
    createObserver(){
      this.observer = new MutationObserver(this.handleMutation);
      this.observer.observe(this.observeSection,{attributes: true});
    }
    init(){
      if (this.numeros.length || this.observerClass || this.observeSection){
        this.createObserver();
      }
      return this;
    }
}