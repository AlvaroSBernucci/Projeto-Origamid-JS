export default function initDateObject(){
  
  const horarioFuncionamento = document.querySelector('[data-horario]');
  const diaSemanaFuncionamento = horarioFuncionamento.dataset.semana.split(',').map(Number);
  const horaFuncionamento = horarioFuncionamento.dataset.horario.split(',').map(Number);
  
  const dataAtual = new Date();
  const diaSemanaAtual = dataAtual.getDay();
  const horaAtual = dataAtual.getHours();

  if (diaSemanaFuncionamento.includes(diaSemanaAtual) && horaAtual >= Math.min(horaFuncionamento) && horaAtual < Math.max(horaFuncionamento)){
      horarioFuncionamento.classList.add('aberto');
  } else{
    horarioFuncionamento.classList.add('fechado');
  }

}