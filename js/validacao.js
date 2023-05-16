function veriricaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoBox.innerHTML += `<div>Valor inválido</div>`;
        return;
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoBox.innerHTML += `
            <div>Valor inválido: o número secreto precisa ester entre ${menorValor} e ${maiorValor}.</div>
        `
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era: ${numeroSecreto}</h3>
        `
    } else if (numero < numeroSecreto) {
            elementoBox.innerHTML += `
                <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i>
            `
    } else {
        elementoBox.innerHTML += `
                <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i>
            `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

