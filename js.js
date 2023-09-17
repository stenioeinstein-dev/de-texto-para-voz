var btn = document.querySelector('#btn')

// função webkitSpeechRecognition para capturar a voz e colocar no textarea
btn.addEventListener('click', (ea) => {
    btn.classList.add('fade')

    let recognition = new webkitSpeechRecognition()
    recognition.lang = 'pt-br'
    recognition.addEventListener('result', (e) => {
        document.querySelector('#textarea').value = e.results[0][0].transcript
        if (textarea.value !== '') {
            let voicesList = window.speechSynthesis.getVoices();
            let ut = new SpeechSynthesisUtterance(textarea.value);
            ut.voice = voicesList[selectedVoice];
            window.speechSynthesis.speak(ut);
        }
        btn.classList.remove('fade')
    })
    recognition.start(() => {

    })
})



let textarea = document.querySelector("#textarea");
let voices = document.querySelector("#voices");
let button = document.querySelector("#button");
let selectedVoice = 0;

// Descobri as opções de voz 
window.speechSynthesis.addEventListener('voiceschanged', () => {
    let voicesList = window.speechSynthesis.getVoices();
    for (let i in voicesList) {
        let optionE1 = document.createElement('option');
        optionE1.setAttribute('value', i);
        optionE1.innerText = voicesList[i].name;
        voices.appendChild(optionE1);
    }
});

// O valor do textarea é transfomado em audio 
button.addEventListener('click', () => {
    if (textarea.value !== '') {
        let voicesList = window.speechSynthesis.getVoices();
        let ut = new SpeechSynthesisUtterance(textarea.value);
        ut.voice = voicesList[selectedVoice];
        window.speechSynthesis.speak(ut);
    }
});

// Qual voz foi Selecionada 
voices.addEventListener('change', () => {
    selectedVoice = parseInt(voices.value);
});


function GA() {
    alert("Essa opção de ainda não está disponível!")
}