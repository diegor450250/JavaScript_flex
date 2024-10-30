        const nombre = prompt("Hola cual es tu nombre")
        while (nombre == null || nombre.length == 0) {
            nombre = prompt("Que me des tu nombre")
        }
        alert("Es un gusto tenerte por aqui " + nombre)
        
        const historial = [];

        function AddHistorial(num1, num2, result, operacion) {
           let operador = " " + operacion + " ";
            historial.push(num1 + operador + num2 + " = " + result);
            document.getElementById('historial').innerText = historial;
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
            historial.length = 0;
            document.getElementById('historial').innerText = historial;
        }

        function validarInput(fun) {
            let num1 = document.getElementById('num1').value;
            let num2 = document.getElementById('num2').value;
            if (num1.length == 0|| num2.length == 0) {
                alert("Llena todos los campos");
            } else {
                fun();
            }
        }
