document.addEventListener("DOMContentLoaded", function () {
    var contenedorObras = document.getElementById("contenedor-obras");

    if (contenedorObras) {
        var obras = [
            { id: 1, titulo: '"La Carta"', precio: "$14.000 CLP", imagen: "Imagenes/La carta.png" },
            { id: 2, titulo: '"El Huaso y la Lavandera"', precio: "$15.000 CLP", imagen: "Imagenes/El Huaso y la Lavandera.png" },
            { id: 3, titulo: '"La Perla del Mercader"', precio: "$12.000 CLP", imagen: "Imagenes/La Perla del Mercader.png" },
            { id: 4, titulo: '"El Viajero"', precio: "$11.000 CLP", imagen: "Imagenes/El Viajero.png" },
            { id: 5, titulo: '"La Generación del 13"', precio: "$18.500 CLP", imagen: "Imagenes/La Generación del 13.png" },
            { id: 6, titulo: '"El Zamacueca"', precio: "$16.200 CLP", imagen: "Imagenes/El Zamacueca.png" },
            { id: 7, titulo: '"Horizontes de Valparaíso"', precio: "$19.800 CLP", imagen: "Imagenes/Horizontes de Valparaíso.png" },
            { id: 8, titulo: '"Cordillera"', precio: "$22.500 CLP", imagen: "Imagenes/Cordillera.png" }
        ];

        contenedorObras.innerHTML = "";

        obras.forEach(function (obra) {
            var article = document.createElement("article");
            article.className = "tarjeta-galeria";
            article.innerHTML = `
                <div class="galeria-img-container">
                    <img src="${obra.imagen}" alt="${obra.titulo}" onerror="this.src='Imagenes/47b3852a-9059-4808-a445-7b7e8baf6868.png'">
                </div>
                <div class="galeria-info">
                    <p class="galeria-titulo">${obra.titulo}</p>
                    <div class="galeria-footer">
                        <span class="galeria-precio">${obra.precio}</span>
                    </div>
                </div>
            `;
            contenedorObras.appendChild(article);
        });
    }

    /* 2. LÓGICA DEL FORMULARIO Y PUJAS */
    var formOferta = document.getElementById("form-oferta");

    if (!localStorage.getItem("precioBaseActual")) {
        localStorage.setItem("precioBaseActual", "15000");
    }

    var precioBaseActual = Number(localStorage.getItem("precioBaseActual"));
    var precioTexto = document.getElementById("precio-base-texto");
    if (precioTexto) {
        precioTexto.textContent = "$" + precioBaseActual.toLocaleString("es-CL") + " CLP";
    }

    if (formOferta) {
        formOferta.addEventListener("submit", function (e) {
            e.preventDefault();

            var inputNombre = document.getElementById("nombre-pintura");
            var inputCorreo = document.getElementById("correo-oferta"); // Captura del campo correo
            var inputMonto = document.getElementById("monto-oferta");
            var mensajeError = document.getElementById("mensaje-error");
            var tablaBody = document.getElementById("tabla-pujas-body");

            mensajeError.style.display = "none";
            mensajeError.textContent = "";

            var nombreVal = inputNombre.value.trim();
            var correoVal = inputCorreo ? inputCorreo.value.trim() : "";
            var montoVal = Number(inputMonto.value.trim());

            if (nombreVal === "") {
                mensajeError.textContent = "Por favor ingresa tu nombre o la pintura a comprar.";
                mensajeError.style.display = "block";
                return;
            }

            // Validar que el correo no esté vacío y tenga un formato válido
            var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (correoVal === "" || !regexEmail.test(correoVal)) {
                mensajeError.textContent = "Por favor ingresa un correo electrónico válido.";
                mensajeError.style.display = "block";
                return;
            }

            if (isNaN(montoVal) || montoVal < (precioBaseActual + 2000)) {
                mensajeError.textContent = "La oferta debe superar el valor actual por un mínimo de $2.000";
                mensajeError.style.display = "block";
                return;
            }

            precioBaseActual = montoVal;
            localStorage.setItem("precioBaseActual", precioBaseActual);
            if (precioTexto) {
                precioTexto.textContent = "$" + precioBaseActual.toLocaleString("es-CL") + " CLP";
            }

            var nuevaFila = document.createElement("tr");
            // Se agrega la columna del correo a la tabla
            nuevaFila.innerHTML = `<td>${nombreVal}</td><td>${correoVal}</td><td>$${montoVal.toLocaleString("es-CL")} CLP</td>`;
            tablaBody.insertBefore(nuevaFila, tablaBody.firstChild);

            formOferta.reset();
        });
    }
});