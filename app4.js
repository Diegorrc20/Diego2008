// CLASE 8: Validación de Inputs y Calculadora de Google Ads (Versión Básica)
document.addEventListener("DOMContentLoaded", function () {
    var formFinanzas = document.getElementById("form-finanzas");

    if (!formFinanzas) return; // Se ejecuta solo en finanzas.html

    formFinanzas.addEventListener("submit", function (e) {
        // 1. Evitar la recarga de la página
        e.preventDefault();

        // Capturar inputs
        var inputCPC = document.getElementById("cpc").value.trim();
        var inputClics = document.getElementById("clics").value.trim();
        var inputTelefono = document.getElementById("telefono-contacto").value.trim();

        // Capturar elementos de error
        var errorCPC = document.getElementById("error-cpc");
        var errorClics = document.getElementById("error-clics");
        var errorTelefono = document.getElementById("error-telefono");
        var resultadoContenedor = document.getElementById("resultado-calculo");
        var advertenciaContenedor = document.getElementById("advertencia-presupuesto");

        // Limpiar mensajes anteriores
        errorCPC.style.display = "none";
        errorCPC.textContent = "";
        errorClics.style.display = "none";
        errorClics.textContent = "";
        errorTelefono.style.display = "none";
        errorTelefono.textContent = "";

        resultadoContenedor.textContent = "";
        advertenciaContenedor.style.display = "none";
        advertenciaContenedor.textContent = "";

        var hayError = false;

        // Validación Campo CPC
        if (inputCPC === "") {
            errorCPC.textContent = "El campo CPC no puede estar vacío.";
            errorCPC.style.display = "block";
            hayError = true;
        } else if (isNaN(inputCPC) || Number(inputCPC) <= 0) {
            errorCPC.textContent = "Ingresa un número válido para el CPC.";
            errorCPC.style.display = "block";
            hayError = true;
        }

        // Validación Campo Clics
        if (inputClics === "") {
            errorClics.textContent = "El campo de clics no puede estar vacío.";
            errorClics.style.display = "block";
            hayError = true;
        } else if (isNaN(inputClics) || Number(inputClics) <= 0) {
            errorClics.textContent = "Ingresa una cantidad numérica válida de clics.";
            errorClics.style.display = "block";
            hayError = true;
        }

        // Validación Campo Teléfono
        if (inputTelefono === "") {
            errorTelefono.textContent = "Por favor ingresa tu número de teléfono.";
            errorTelefono.style.display = "block";
            hayError = true;
        } else if (isNaN(inputTelefono)) {
            errorTelefono.textContent = "El teléfono solo debe contener números (sin letras).";
            errorTelefono.style.display = "block";
            hayError = true;
        }

        // Detener si hay errores
        if (hayError) return;

        // Operación matemática: Costo de Marketing
        var cpcVal = Number(inputCPC);
        var clicsVal = Number(inputClics);
        var costoTotal = cpcVal * clicsVal;

        // Inyección del resultado en pantalla especificando Google Ads
        resultadoContenedor.textContent = "Presupuesto estimado de Google Ads: $" + costoTotal.toLocaleString("es-CL") + " CLP";

        // Alerta Amarilla si supera los $50.000
        if (costoTotal > 50000) {
            advertenciaContenedor.textContent = "El presupuesto mensual de Google Ads ($" + costoTotal.toLocaleString("es-CL") + " CLP) supera el límite sugerido de $50.000 CLP.";
            advertenciaContenedor.style.display = "block";
        }
    });
});