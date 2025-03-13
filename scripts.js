function addCarac (caracter){
  const valorImput = document.querySelector('#display').value
  document.querySelector('#display').value = valorImput + caracter
}

function limpaTela(){
  document.querySelector('#display').value = ""
}

function calculateResult(){
  const valorImput = document.querySelector('#display').value
  document.querySelector('#display').value = eval(valorImput)
}

function apagaUm(){
  const valorImput = document.querySelector('#display').value
  document.querySelector('#display').value = display.value.slice(0, -1);
}
function invert(){
  const valorImput = document.querySelector('#display').value
  document.querySelector('#display').value = valorImput * -1
}
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    calculateResult();
  }
})

function focarDisplay() {
  document.querySelector("#display").focus();
}

window.onload = focarDisplay; 

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", focarDisplay); 
});