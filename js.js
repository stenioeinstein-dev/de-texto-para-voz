let textarea = document.querySelector("#textarea");
let voices = document.querySelector("#voices");
let button = document.querySelector("#button");
let selectedVoice = 0;

window.speechSynthesis.addEventListener('voiceschanged', () => {
    let voicesList = window.speechSynthesis.getVoices();
    for (let i in voicesList) {
        let optionE1 = document.createElement('option');
        optionE1.setAttribute('value', i);
        optionE1.innerText = voicesList[i].name;
        voices.appendChild(optionE1);
    }
});

button.addEventListener('click', () => {
    if (textarea.value !== '') {
        let voicesList = window.speechSynthesis.getVoices();
        let ut = new SpeechSynthesisUtterance(textarea.value);
        ut.voice = voicesList[selectedVoice];
        window.speechSynthesis.speak(ut);
    }
});

voices.addEventListener('change', () => {
    selectedVoice = parseInt(voices.value);
});





var btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
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