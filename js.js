var btn = document.querySelector('#btn')

// função webkitSpeechRecognition para capturar a voz e colocar no textarea
btn.addEventListener('click', (ea) => {
    btn.classList.add('fade')

    let recognition = new webkitSpeechRecognition()
    recognition.lang = 'en-uk'
    recognition.addEventListener('result', (e) => {
        document.querySelector('#txtr').value = e.results[0][0].transcript
        if (txtr.value !== '') {
            let voicesList = window.speechSynthesis.getVoices();
            let ut = new SpeechSynthesisUtterance(txtr.value);
            ut.voice = voicesList[selectedVoice];
            window.speechSynthesis.speak(ut);
        }
        btn.classList.remove('fade')
    })
    recognition.start(() => {

    })
})



let txtr = document.querySelector("#txtr");
let vcs = document.querySelector("#vcs");
let bttn = document.querySelector("#bttn");
let slctdVc = 0;

// Descobri as opções de voz 
window.speechSynthesis.addEventListener('voiceschanged', () => {
    let voicesList = window.speechSynthesis.getVoices();
    for (let i in voicesList) {
        let optionE1 = document.createElement('option');
        optionE1.setAttribute('value', i);
        optionE1.innerText = voicesList[i].name;
        vcs.appendChild(optionE1);
    }
});

// O valor do textarea é transfomado em audio 
bttn.addEventListener('click', () => {
    if (txtr.value !== '') {
        let voicesList = window.speechSynthesis.getVoices();
        let ut = new SpeechSynthesisUtterance(txtr.value);
        ut.vcs = voicesList[slctdVc];
        window.speechSynthesis.speak(ut);
    }
});

// Qual voz foi Selecionada 
vcs.addEventListener('change', () => {
    slctdVc = parseInt(vcs.value);
});


function GA() {
    alert("Essa opção de ainda não está disponível!")
}

let prblmsnd = document.querySelector("#prblmsnd");

prblmsnd.addEventListener('click', () => {
    alert("Problema teu, tô nem aí!")
});