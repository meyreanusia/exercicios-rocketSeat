//validacao do formulario
export function notANumber(value){
    return isNaN(value) || value == "";
}
  
  
  //calculo do imc
  
export function calculateIMC(weigth, height) {
    return (weigth / (height / 100) ** 2).toFixed(2);
}
  