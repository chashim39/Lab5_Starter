// explore.js

var voiceSelect = document.getElementById("voice-select");
var ttsMessage = document.getElementById("text-to-speak");
var smileyImage = document.querySelector("img");
var button = document.querySelector("button");


window.addEventListener('DOMContentLoaded', init);

function init() {
  return true;
}


function populateVoiceList() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }

  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}
populateVoiceList();
speechSynthesis.onvoiceschanged = populateVoiceList;

ttsMessage.addEventListener('change', ttsTest());
function ttsTest() {
  console.log(ttsMessage.value);
}

function textToSpeech() {
  var message = new SpeechSynthesisUtterance();

  message.text = ttsMessage.value;

  if (voiceSelect.value) {
    message.voice = speechSynthesis.getVoices().filter(function(voice) { 
      return voice.name == voiceSelect.value; })[0];
  }

  window.speechSynthesis.speak(message);
}

button.addEventListener('click', function(e) {
	if (ttsMessage.value.length > 0) {
		textToSpeech();
	}
});