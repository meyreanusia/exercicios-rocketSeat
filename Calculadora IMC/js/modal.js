
// Objeto literal que irá orquestrar o modal (abrir e fechar).
export const Modal = {
    // variaveis
    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".modal .title span"),
    buttonClose: document.querySelector(".modal button.close"),
  
    // outro modo de fazer: open:function(){}
    open() {
      // add a classe 
      Modal.wrapper.classList.add("open");
    },
    close() {
      // fechando modal ao clicar no botao X
      Modal.wrapper.classList.remove("open");
  
    }
  }
  
// fechando modal ao clicar no botao X
  Modal.buttonClose.onclick = () => {
    Modal.close();
  }

// fechando modal ao clicar no esc - teclado

  window.addEventListener('keydown', handleKeydown);

  function handleKeydown(event){
    // console.log(event.key);

    if(event.key === "Escape"){
      Modal.close();
    }
  }