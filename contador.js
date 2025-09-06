function atualizarContador() {
  const inicio = new Date("2023-09-06T00:00:00");
  const agora = new Date();

  let tempo = agora - inicio;

  let totalSegundos = Math.floor(tempo / 1000);

  const segundosEmAno = 365.25 * 24 * 3600;
  const segundosEmMes = 30.44 * 24 * 3600; // Média mais próxima
  const segundosEmDia = 24 * 3600;
  const segundosEmHora = 3600;
  const segundosEmMinuto = 60;

  const anos = Math.floor(totalSegundos / segundosEmAno);
  totalSegundos %= segundosEmAno;

  const meses = Math.floor(totalSegundos / segundosEmMes);
  totalSegundos %= segundosEmMes;

  const dias = Math.floor(totalSegundos / segundosEmDia);
  totalSegundos %= segundosEmDia;

  const horas = Math.floor(totalSegundos / segundosEmHora);
  totalSegundos %= segundosEmHora;

  const minutos = Math.floor(totalSegundos / segundosEmMinuto);
  const segundos = totalSegundos % 60;

  document.getElementById("contador").textContent =
    `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

atualizarContador();
setInterval(atualizarContador, 1000);