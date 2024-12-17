const whatsappIcon = document.getElementById("whatsappIcon");
const whatsappBox = document.getElementById("whatsappBox");
const closeChatBox = document.getElementById("closeChatBox");

// Mostrar la caja de chat al hacer clic en el icono
whatsappIcon.addEventListener("click", () => {
    whatsappBox.style.display = "block";
});

// Cerrar la caja de chat al hacer clic en el botón de cerrar
closeChatBox.addEventListener("click", () => {
    whatsappBox.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    const languageLinks = document.querySelectorAll(".language-change");

    languageLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const href = this.getAttribute("href");

            document.body.classList.add("page-transition"); // Aplica el efecto

            setTimeout(() => {
                window.location.href = href; // Redirige después de la animación
            }, 500); // Tiempo coincidente con la duración de la animación
        });
    });
});
