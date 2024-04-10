const dias_falta = document.querySelectorAll(".dias_restates");

function calcula(){
    const tempoObjetivo1 = new Date("2024-04-30T00:00:00");

    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo1 - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(minutos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);
 segundos %=60;
 minutos %= 60;
 horas  %= 24;       
}