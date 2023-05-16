window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const elementoBox = document.getElementById("chute");

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    let chute = e.results[0][0].transcript
    exibeChuteNaTela(chute);
    veriricaSeOChutePossuiUmValorValido(chute);
}

function exibeChuteNaTela(chute) {
    elementoBox.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())