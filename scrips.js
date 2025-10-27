let circulo = document.querySelector(".circulo");
let copo = document.querySelector(".copo");
let button = document.querySelector(".button");

function trocarCor(color) {
  circulo.style.background = color;
}
function trocaCopo(img) {
  copo.src = img;
  copo.style.width = "400px";
}

function clickButton() {
  alert("Você será redirecionado para o meu portfólio! Obrigado!");

  window.location.href = "https://portfolio-daniel-bork.vercel.app";
}
