const ResultHistorial = []; 

let segundos = 0;
let minutos = 0;

document.addEventListener('DOMContentLoaded', saludar() );

document.addEventListener('DOMContentLoaded', ValidarLclStorage);

function ValidarLclStorage () {
    try { 
        const arrayLcl = [];
        arrayLcl.unshift(JSON.parse(localStorage.getItem('historial')));
        for (let x = 0; x < arrayLcl[0].length; x++) {
            const nuevoP = document.createElement("p");
        nuevoP.innerText = arrayLcl[0][x];
        ResultHistorial.push(arrayLcl[0][x])
        nuevoP.classList.add('historial')
        const contenedor = document.getElementById("contenedor-historial");
        contenedor.appendChild(nuevoP);
        }
    } catch (error) {
    }
}

async function saludar (){
    const { value: nombre} = await Swal.fire({
        title: "Bienvenido queremos conocerte",
        input: "text",
        inputLabel: "Cuentanos como te llamas",
        inputPlaceholder: "Ingresa tu nombre",
        inputValidator: (value) => {
            if(!value) {
                return "Es necesario ingresar tu nombre";
            }
        }
     });
    if (nombre) {
        Swal.fire(`Bienvenido ${nombre}`)
        document.getElementById('saludo').innerText = 'Es un gusto tenerte por aquí ' + nombre + '!'; 
    } 
}        

function AddHistorial(num1, num2, result, operacion) {
    const resultado = num1 + " " + operacion + " " + num2 + " = " + result;
    HistorialHtml(resultado);
    ResultHistorial.unshift(resultado);
    localStorage.setItem('historial', JSON.stringify(ResultHistorial));
}

function HistorialHtml(resultado) {
    const nuevoP = document.createElement("p");
    nuevoP.innerText = resultado;
    nuevoP.classList.add('historial')
    const contenedor = document.getElementById("contenedor-historial");
    if (contenedor.firstChild) {
        contenedor.insertBefore(nuevoP, contenedor.firstChild);
    }else {
        contenedor.appendChild(nuevoP);
    }
}

function sumar() { 
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let result = num1 + num2;
    document.getElementById('resultado').innerText = "El resultado es " + result;
    AddHistorial(num1, num2, result, "+")
    imagenRandom()

}

function resta() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let result = num1 - num2;
    document.getElementById('resultado').innerText = "El resultado es " + result;
    AddHistorial(num1, num2, result, "-")
    imagenRandom()
}

function multiplicar() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let result = num1 * num2;
    document.getElementById('resultado').innerText = "El resultado es " + result;
    AddHistorial(num1, num2, result, "*")
    imagenRandom()
}

function dividir() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let result = num1 / num2;
    document.getElementById('resultado').innerText = "El resultado es " + result;
    AddHistorial(num1, num2, result, "/")
    imagenRandom()
}

function imagenRandom() {
    try {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            const imagen = document.getElementById('imagenRandom')
            imagen.src = data.message;
        });
    } catch (error) {
        console.log("No se pudo traer la imagen ")
    }
}

function borrarHistorial() {
    const pHitsorial = document.querySelectorAll('.historial');
    pHitsorial.forEach(parrafo => parrafo.remove());
    localStorage.clear();
}

function validarInput(callback) {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    if (num1.length == ''|| num2.length == '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salio mal",
            footer: "Intenta de nuevo"

        });
    } else {
        callback();
    }
}

function modoNoche() {
    document.body.classList.toggle('night-mode');
}

function timerPagina() {
    cronometro = document.getElementById('cronometro');
    segundos++;
    if (segundos == 60) {
        minutos++;
        segundos = 0;
    }
    cronometro.innerText = minutos + ":" + segundos;
    
}

setInterval(timerPagina, 1000)

function copiarLink () {
    navigator.clipboard.writeText('https://www.linkedin.com/in/diego-alfonso-ram%C3%ADrez-almaguer-1ba70a315/')
    const end = Date.now() + 1500;

    const colors = ["#003aff", "#ffffff", '#7ddf0e', '#df0e0e', '#f1ea03'];
    
    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
    
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });
    
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
    const cerrar = document.getElementById('popup');
    cerrar.classList.add("popupBorrar")
    setTimeout(function() {
        cerrar.remove()
    }, 2000);
}
