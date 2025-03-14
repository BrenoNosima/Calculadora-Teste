function addCarac (caracter){
  const valorImput = document.querySelector('#display').value
  document.querySelector('#display').value = valorImput + caracter
}

function limpaTela(){
  document.querySelector('#display').value = ""
}

function calculateResult() {
  const valorInput = document.querySelector('#display').value;

  try {
    if (!/^[\d+\-*/(). ]+$/.test(valorInput)) {  // regex 0-9 Expressões Num 
      throw new Error("Entrada inválida");
    }

    const resultado = new Function(`return ${valorInput}`)();

    document.querySelector('#display').value = resultado;
  } catch (error) {
    document.querySelector('#display').value = "Error";
  }
}

function apagaUm() {
  const display = document.querySelector('#display');
  display.value = display.value.slice(0, -1);
}

function invert() {
  const display = document.querySelector('#display');
  if (display.value !== "") {
    display.value = parseFloat(display.value) * -1;
  }
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