const menorValor = 1;
const maiorValor = 10;
const numeroSecreto = gerarNumeroAleatorio();
const elementoMenorvalor = document.getElementById("menor-valor");
const elementoMaiorValor = document.getElementById("maior-valor");

elementoMenorvalor.innerText = menorValor.toString();
elementoMaiorValor.innerText = maiorValor.toString();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log("Número secreto: ", numeroSecreto)