let vlrContrato = document.getElementById("vlrContrato");
let porcentagemSinal = document.getElementById("porcentagemSinal");
let vlrSinal = document.getElementById("vlrSinal");
let porcentagem90dias = document.getElementById("porcentagem90dias");
let porcentagem60dias = document.getElementById("porcentagem60dias");
let porcentagem15dias = document.getElementById("porcentagem15dias");
let vlr90dias = document.getElementById("vlr90dias");
let vlr60dias = document.getElementById("vlr60dias");
let vlr15dias = document.getElementById("vlr15dias");

function enviar() {  
  let valorContrato = parseFloat(vlrContrato.value);
  let vlrContratoPrint = valorContrato.toLocaleString("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
  });
  let percentualSinal = parseFloat(porcentagemSinal.value);

  let vlrSinalCalculado = valorContrato * (percentualSinal / 100);
  let vlrSinalCalculadoPrint = vlrSinalCalculado.toLocaleString("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
  });

  vlrSinal.innerHTML = `<em>Levando em consideração a porcentagem de <strong>${percentualSinal}%</strong> sobre o valor do Contrato de <strong>R$ ${vlrContratoPrint}</strong>, o valor do sinal fica <strong>R$ ${vlrSinalCalculadoPrint}</strong></em>`;
  document.getElementById("vlrSinal").style.border = "2px solid black";

  //calculando 90 dias antes da entrada do evento
  let vlr90 = parseFloat(porcentagem90dias.value);
  let vlr90calculado = valorContrato * (vlr90 / 100);
  let vlr90print = vlr90calculado.toLocaleString("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
  });
  vlr90dias.innerHTML = `<strong>R$ ${vlr90print}</strong>`;

  //calculando 60 dias antes da entrada do evento
  let vlr60 = parseFloat(porcentagem60dias.value);
  let vlr60calculado = valorContrato * (vlr60 / 100);
  let vlr60print = vlr60calculado.toLocaleString("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
  });
  vlr60dias.innerHTML = `<strong>R$ ${vlr60print}</strong>`;

  //calculando 15 dias antes da entrada do evento
  let vlr15 = parseFloat(porcentagem15dias.value);
  let vlr15calculado = valorContrato * (vlr15 / 100);
  let vlr15print = vlr15calculado.toLocaleString("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
  });
  vlr15dias.innerHTML = `<strong> R$ ${vlr15print}</strong>`;

  if (valorContrato <= 0) {
    alert("Por favor insira um valor positivo no valor do contrato");
    window.location.reload();
  } else if (percentualSinal <= 0) {
    alert("Por favor insira um valor positivo no campo do sinal do contrato");
    window.location.reload();
  } else if (vlr90 <= 0) {
    alert(
      "Por favor insira um valor positivo no campo de % de 90 dias antes do evento"
    );
    window.location.reload();
  } else if (vlr60 <= 0) {
    alert(
      "Por favor insira um valor positivo no campo de % de 60 dias antes do evento"
    );
    window.location.reload();
  } else if (vlr15 <= 0) {
    alert(
      "Por favor insira um valor positivo no campo de % de 15 dias antes do evento"
    );
    window.location.reload();
  }
  let provaReal = percentualSinal + vlr90 + vlr60 + vlr15;

  if (provaReal != 100){
    alert("Calcule novamente, o valor das porcentagens não batem com o valor total do evento.")
    window.location.reload();
  }

  document.getElementById("calcular").style.display = "none";
}
