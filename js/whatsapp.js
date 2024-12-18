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