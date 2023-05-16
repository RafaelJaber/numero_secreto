const menorValor = 10;
const maiorValor = 50;
const numeroSecreto = gerarNumeroAleatorio();
const elementoMenorvalor = document.getElementById("menor-valor");
const elementoMaiorValor = document.getElementById("maior-valor");

elementoMenorvalor.innerText = menorValor.toString();
elementoMaiorValor.innerText = maiorValor.toString();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log("Número secreto: ", numeroSecreto)