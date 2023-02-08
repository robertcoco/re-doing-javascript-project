
// Para manipular elementos del DOM con javascript lo único que tenemos que hacer 
// es utilizar el objeto document que esta disponible en todos los navegadores
// el objeto document tiene muchos métodos para seleccionar elementos del DOM

const h1 = document.querySelector("h1");
const classParrafo = document.querySelector(".parrafo");
const form = document.querySelector("#form");
const idParrafo = document.getElementById("pid");
const numero2 = document.getElementById("numero2");
const body = document.querySelector("body");
const button = document.getElementById("calcular");
const numero1 = document.getElementById("numero1");

resultado = document.createElement("p");
function AddTwoNumbers(event) {
    console.log({event})
    event.preventDefault()
    // para introducir variables dentro de un string utilizamos la sintaxis especial ${} con las comillas invertidas.
    resultado.innerHTML = `El resultado es ${Number(numero1.value) + Number(numero2.value)}`;
    body.append(resultado);
}

form.addEventListener("submit", AddTwoNumbers);



