document.addEventListener("DOMContentLoaded", function () {
    var contenedorEquipo = document.getElementById("contenedor-equipo");
    
    // Si no está en la página "Nosotros", no ejecuta el script
    if (!contenedorEquipo) return;

    // Lista de los 5 integrantes del equipo con roles mejorados
    var equipo = [
        {
            nombre: "Diego Rodríguez",
            rol: "Desarrollador Programador",
            descripcion: "Maquetación HTML5, diseño de interfaz CSS3 y desarrollo de la lógica interactiva en JavaScript para la plataforma.",
            imagen: "Imagenes/Mi foto personal.png"
        },
        {
            nombre: "Vicente",
            rol: "Diseñador de la interfaz de usuario (UI)",
            descripcion: "Diseño visual del sitio, prototipado de pantallas, paleta de colores y optimización de la experiencia de usuario.",
            imagen: "Imagenes/47b3852a-9059-4808-a445-7b7e8baf6868.png"
        },
        {
            nombre: "Carlos",
            rol: "Administrador del Sistema",
            descripcion: "Gestión de datos locales (LocalStorage), validación de formularios, control de acceso y soporte del panel admin.",
            imagen: "Imagenes/47b3852a-9059-4808-a445-7b7e8baf6868.png"
        },
        {
            nombre: "Juan",
            rol: "Gestor de Contenidos y Arte",
            descripcion: "Catalogación de obras, estructuración de la información visual y redacción de contenidos descriptivos para la plataforma.",
            imagen: "Imagenes/47b3852a-9059-4808-a445-7b7e8baf6868.png"
        },
        {
            nombre: "María",
            rol: "Control de Calidad (QA)",
            descripcion: "Verificación de enlaces, pruebas de navegación, revisión de diseño responsivo y control de errores del sitio.",
            imagen: "Imagenes/47b3852a-9059-4808-a445-7b7e8baf6868.png"
        }
    ];

    // Renderizado dinámico de las 5 tarjetas
    var htmlEquipo = "";
    equipo.forEach(function (miembro) {
        htmlEquipo += `
            <article class="tarjeta-equipo">
                <img src="${miembro.imagen}" alt="Foto de ${miembro.nombre}" class="foto-integrante">
                <div class="info-integrante">
                    <h3>${miembro.nombre}</h3>
                    <span class="rol-integrante">${miembro.rol}</span>
                    <p>${miembro.descripcion}</p>
                </div>
            </article>
        `;
    });

    contenedorEquipo.innerHTML = htmlEquipo;
});
