export default function Controls(buttonPlay, buttonPause, buttonSet, buttonStop,){
  function play() {
    buttonPlay.classList.add("hide");
    document.querySelector(".pause").classList.remove("hide");

    buttonSet.classList.add("hide");
    buttonStop.classList.remove("hide");
  }

  function pause() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }

  function reset() {
    buttonStop.classList.add("hide");
    buttonSet.classList.remove("hide");
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
  }

  function getMinutes() {
    let newMinutes = prompt("Quantos minutos?");
    if (!newMinutes) {
      return false;
    }
    return newMinutes;

  }

  return {
    reset,
    play,
    pause,
    getMinutes
  };
}

// default export
// export default resetControls;
