// explore.js

var voiceSelect = document.getElementById("voice-select");

window.addEventListener('DOMContentLoaded', init);

function init() {
  
}


function loadVoices() {
  var voices = SpeechSynthesis.getVoices();
  voices.forEach(function(voice,i){
    var option = document.createElement('option');
    option.value = voice.name;
    option.innerHTML = voice.name;

    voiceSelect.appendChild(option);
  });
}

loadVoices();