let imagem = document.querySelector(".starbucks")
let fundo = document.querySelector(".circulo")

function trocarImagem(endereco) {
    imagem.src = endereco;
    console.log("Imagem trocada para:", endereco)
}
function trocarFundo(cor) {
    fundo.style.background = cor
}