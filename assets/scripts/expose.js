// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  return true;
}

var exposeObject = document.getElementById("expose");
var selectedHorn = document.getElementById("horn-select");
var volumeSlider = document.getElementById("volume");
var imageList = document.querySelectorAll("img");
var audio = new Audio();
audio.volume = 0.5;
var button = document.querySelector("button");
const jsConfetti = new JSConfetti();

selectedHorn.addEventListener('input', testPrint1);

volumeSlider.addEventListener('input', testPrint2);

button.addEventListener('click', () => {
  audio.play();
  if (selectedHorn.value == "party-horn") {
    jsConfetti.addConfetti();
  }
})

function testPrint1() {
  console.log(selectedHorn.value);
  if (selectedHorn.value == "air-horn") {
    audio.src = "assets/audio/air-horn.mp3";
    imageList[0].src = "assets/images/air-horn.svg"
  }
  else if (selectedHorn.value == "car-horn") {
    audio.src = "assets/audio/car-horn.mp3"
    imageList[0].src = "assets/images/car-horn.svg"
  }
  else if (selectedHorn.value == "party-horn") {
    audio.src = "assets/audio/party-horn.mp3"
    imageList[0].src = "assets/images/party-horn.svg"
  }

  console.log(audio.src);
}

function testPrint2() {
  console.log(volumeSlider.value);
  if (volumeSlider.value == 0) {
    imageList[1].src = "assets/icons/volume-level-0.svg"
  }
  else if ((volumeSlider.value >= 1) && (volumeSlider.value < 33)) {
    imageList[1].src = "assets/icons/volume-level-1.svg"
  }
  else if ((volumeSlider.value >= 33) && (volumeSlider.value < 67)) {
    imageList[1].src = "assets/icons/volume-level-2.svg"
  }
  else if ((volumeSlider.value >= 67) && (volumeSlider.value <= 100)) {
    imageList[1].src = "assets/icons/volume-level-3.svg"
  }

  audio.volume = volumeSlider.value/100;
}