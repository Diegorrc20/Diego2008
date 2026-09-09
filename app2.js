document.addEventListener("DOMContentLoaded", function () {
    var formLogin = document.getElementById("form-login");
    var inputUsuario = document.getElementById("usuario");
    var inputCorreo = document.getElementById("correo");
    var inputClave = document.getElementById("clave");

    var errorUsuario = document.getElementById("error-usuario");
    var errorCorreo = document.getElementById("error-correo");
    var errorClave = document.getElementById("error-clave");

    var seccionLogin = document.getElementById("seccion-login");
    var panelAdmin = document.getElementById("panel-admin");
    var btnCerrar = document.getElementById("btn-cerrar");
    var cuerpoTabla = document.getElementById("cuerpo-tabla");

    if (formLogin) {
        formLogin.addEventListener("submit", function (e) {
            e.preventDefault();

            if (errorUsuario) errorUsuario.textContent = "";
            if (errorCorreo) errorCorreo.textContent = "";
            if (errorClave) errorClave.textContent = "";

            var usuarioVal = inputUsuario.value.trim();
            var correoVal = inputCorreo ? inputCorreo.value.trim() : "";
            var claveVal = inputClave.value.trim();
            var hayError = false;

            if (usuarioVal === "") {
                if (errorUsuario) errorUsuario.textContent = "Por favor ingresa tu usuario.";
                hayError = true;
            }

            var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (correoVal === "") {
                if (errorCorreo) errorCorreo.textContent = "Por favor ingresa tu correo electrónico.";
                hayError = true;
            } else if (!regexEmail.test(correoVal)) {
                if (errorCorreo) errorCorreo.textContent = "Ingresa un correo electrónico válido.";
                hayError = true;
            }

            if (claveVal === "") {
                if (errorClave) errorClave.textContent = "Por favor ingresa tu contraseña.";
                hayError = true;
            }

            if (hayError) return;

            if (seccionLogin && panelAdmin) {
                seccionLogin.style.display = "none";
                panelAdmin.style.display = "block";

                if (cuerpoTabla) {
                    var nuevaFila = document.createElement("tr");
                    nuevaFila.innerHTML = `
                        <td>${usuarioVal}</td>
                        <td>${correoVal}</td>
                        <td>Consulta General / Soporte</td>
                        <td>Acceso registrado el ${new Date().toLocaleDateString("es-CL")}</td>
                    `;
                    cuerpoTabla.appendChild(nuevaFila);
                }
            }

            formLogin.reset();
        });
    }

    if (btnCerrar) {
        btnCerrar.addEventListener("click", function () {
            if (seccionLogin && panelAdmin) {
                panelAdmin.style.display = "none";
                seccionLogin.style.display = "block";
            }
        });
    }
});