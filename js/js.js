document.addEventListener('DOMContentLoaded', saludar() );

function saludar (){
    const nombre = prompt("Hola cual es tu nombre");
    if (nombre == '' || nombre == null) {
                alert("Es un gusto tenerte por aqui desconocido");
                document.getElementById('saludo').innerText = 'Bienvenido desconocido!';
    } else {
                alert("Es un gusto tenerte por aqui " + nombre);
                document.getElementById('saludo').innerText = 'Bienvenido ' + nombre + '!';
    }
}        

function AddHistorial(num1, num2, result, operacion) {
    const nuevoP = document.createElement("p");
    nuevoP.innerText = num1 + " " + operacion + " " + num2 + " = " + result;
    nuevoP.classList.add('historial')
    const contenedor = document.getElementById("contenedor-historial");
    contenedor.appendChild(nuevoP);
}

function sumar() { 
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let result = num1 + num2;
    document.getElementById('resultado').innerText = "El resultado es " + result;
    AddHistorial(num1, num2, result, "+")

}

function resta() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let result = num1 - num2;
    document.getElementById('resultado').innerText = "El resultado es " + result;
    AddHistorial(num1, num2, result, "-")
}

function multiplicar() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let result = num1 * num2;
    document.getElementById('resultado').innerText = "El resultado es " + result;
    AddHistorial(num1, num2, result, "*")
}

function dividir() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let result = num1 / num2;
    document.getElementById('resultado').innerText = "El resultado es " + result;
    AddHistorial(num1, num2, result, "/")
}

function borrarHistorial() {
    const pHitsorial = document.querySelectorAll('.historial');
    pHitsorial.forEach(parrafo => parrafo.remove());
}

function validarInput(callback) {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    if (num1.length == ''|| num2.length == '') {
        alert("Llena todos los campos");
    } else {
        callback();
    }
}

function modoNoche() {
    document.body.classList.toggle('night-mode');
}
