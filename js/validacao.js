function veriricaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoBox.innerHTML += `
            <div>Valor inválido</div>
            <button id="jogar-novamente" class="btn-jogar">Reiniciar</button>
        `;
        return;
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoBox.innerHTML += `
            <div>Valor inválido: o número secreto precisa ester entre ${menorValor} e ${maiorValor}.</div>
            <button id="jogar-novamente" class="btn-jogar">Reiniciar</button>
        `
        return;
    }

    if (numero === numeroSecreto) {
        titulo.innerText = '';
        fraseNumer.innerText = '';
        elementoBox.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era: ${numeroSecreto}</h3>
            <div id="emitter"></div>
            
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        myConfetti({
            particleCount: 300,
            spread: 160
        });
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

document.body.addEventListener('click', e => {
    if (e.target.id === 'jogar-novamente') {
        window.location.reload();
    }
})
