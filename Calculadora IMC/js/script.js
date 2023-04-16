import { Modal} from './modal.js';
import {AlertError} from './alert-error.js'
import {calculateIMC, notANumber} from './utils.js'

const form = document.querySelector("form");
const inputWeigth = document.querySelector("#weigth");
const inputHeigth = document.querySelector("#heigth");


// A tribuindo funçao a um envento
form.onsubmit = function (event) {
  event.preventDefault();
  
  const weigth = inputWeigth.value;
  const heigth = inputHeigth.value;
  const weigthOrheigthIsNotANumber = notANumber(weigth) || notANumber(heigth);

  if(weigthOrheigthIsNotANumber){
    AlertError.open();
    return;
  }
  
  AlertError.close();

  let result = calculateIMC(weigth, heigth);
  displayResultMessage(result);
};

inputHeigth.oninput = () => AlertError.close();
inputWeigth.oninput = () => AlertError.close();


function displayResultMessage(result){
  const message = `Seu IMC é de ${result}`;

  // add a classe e atribuir a mensagem com o imc.
  Modal.message.innerText = message;
  Modal.open();
}
