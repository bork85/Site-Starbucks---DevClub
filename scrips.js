let circulo = document.querySelector(".circulo")
let copo = document.querySelector(".copo")

function trocarCor(color) {
    circulo.style.background = color
}
function trocaCopo(img) {
    copo.src = img
    copo.style.width = '400px'
}