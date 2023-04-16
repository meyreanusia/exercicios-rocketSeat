// EcmaScript - ES6 Modules
// default import
import Controls from "./controls.js";
// name import
import Timer from "./timer.js";

// DOM - Document Object Model

const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonSet = document.querySelector(".set");
const buttonSoundOn = document.querySelector(".sound-on");
const buttonSoundOff = document.querySelector(".sound-off");

let minutesDisplay = document.querySelector(".minutes");
let secondsDisplay = document.querySelector(".seconds");
let minutes = Number(minutesDisplay.textContent);


// injecao de dependencias
// modo 1: chama o factory com as dependencias, e dps de criado, chama o factory com o objeto.
const controls = Controls(buttonPause, buttonPlay, buttonSet, buttonStop);
//  modo 2: criar  um objeto com as dependencias
const configTimer = {
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
};

const timer = Timer(configTimer);

// Event-driven
// programacao imperativa

buttonPlay.addEventListener("click", function () {
  controls.play;
  timer.countDown();
});

buttonPause.addEventListener("click", function () {
  controls.pause();
  timer.pause();
});

buttonStop.addEventListener("click", function () {
  controls.holdi();
  timer.reset();
});

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOn.classList.toggle("hide");
  buttonSoundOff.classList.toggle("hide");
});

buttonSoundOff.addEventListener("click", function () {
  buttonSoundOn.classList.toggle("hide");
  buttonSoundOff.classList.toggle("hide");
});

buttonSet.addEventListener("click", function () {
  let newMinutes = controls.getMinutes();
  if (!newMinutes) {
    timer.reset();
    return;
  }
  minutes = newMinutes;
  timer.updateDisplay(minutes, 0);
});
