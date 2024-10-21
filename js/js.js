        var nombre = prompt("Hola cual es tu nombre")
        while (nombre == null || nombre.length == 0) {
            nombre = prompt("Que me des tu nombre")
        }
        alert("Es un gusto tenerte por aqui " + nombre)
        
        const historial = [];

        function AddHistorial(num1, num2, result, operacion) {
           var operador = " " + operacion + " ";
            historial.push(num1 + operador + num2 + " = " + result);
            document.getElementById('historial').innerText = historial;
        }

        function sumar() {
            var num1 = parseInt(document.getElementById('num1').value);
            var num2 = parseInt(document.getElementById('num2').value);
            var result = num1 + num2;
            document.getElementById('resultado').innerText = "El resultado es " + result;
            AddHistorial(num1, num2, result, "+")
        }

        function resta() {
            var num1 = parseInt(document.getElementById('num1').value);
            var num2 = parseInt(document.getElementById('num2').value);
            var result = num1 - num2;
            document.getElementById('resultado').innerText = "El resultado es " + result;
            AddHistorial(num1, num2, result, "-")
        }

        function multiplicar() {
            var num1 = parseInt(document.getElementById('num1').value);
            var num2 = parseInt(document.getElementById('num2').value);
            var result = num1 * num2;
            document.getElementById('resultado').innerText = "El resultado es " + result;
            AddHistorial(num1, num2, result, "*")
        }

        function dividir() {
            var num1 = parseInt(document.getElementById('num1').value);
            var num2 = parseInt(document.getElementById('num2').value);
            var result = num1 / num2;
            document.getElementById('resultado').innerText = "El resultado es " + result;
            AddHistorial(num1, num2, result, "/")
        }

        function borrarHistorial() {
            historial.length = 0;
            document.getElementById('historial').innerText = historial;
        }