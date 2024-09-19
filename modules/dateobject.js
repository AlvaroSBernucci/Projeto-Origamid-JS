export default class Funcionamento{
  constructor(horario){
    this.horario = document.querySelector(horario);

  }

  horarioFuncionamento(){
    this.diaSemanaFuncionamento = this.horario.dataset.semana.split(',').map(Number);
    this.horaFuncionamento = this.horario.dataset.horario.split(',').map(Number);
  }
  
  horarioAgora(){
    this.dataAtual = new Date();
    this.diaSemanaAtual = this.dataAtual.getDay();
    this.horaAtual = this.dataAtual.getUTCHours() - 3;
  }

  checarHorario(){
    const checarDia = this.diaSemanaFuncionamento.includes(this.diaSemanaAtual);
    const checarHorario = this.horaAtual >= Math.min(this.horaFuncionamento);
    return (checarDia && checarHorario);
  }
  definirFuncionamento(){
    if (this.checarHorario) this.horario.classList.add('aberto');
    else this.horario.classList.add('fechado');
  }
  // if (diaSemanaFuncionamento.includes(diaSemanaAtual) && horaAtual >= Math.min(horaFuncionamento) && horaAtual < Math.max(horaFuncionamento)){
  //     horarioFuncionamento.classList.add('aberto');
  // } else{
  //   horarioFuncionamento.classList.add('fechado');
  // }
  init(){
    this.horarioFuncionamento();
    this.horarioAgora();
    this.definirFuncionamento();
    return this;
  }

}