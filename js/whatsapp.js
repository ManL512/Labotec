const whatsappIcon = document.getElementById("whatsappIcon");
const whatsappBox = document.getElementById("whatsappBox");
const closeChatBox = document.getElementById("closeChatBox");

if (whatsappIcon && whatsappBox) {
  whatsappIcon.addEventListener("click", () => {
    whatsappBox.style.display = "block";
    whatsappBox.setAttribute('aria-hidden', 'false');
  });
}

if (closeChatBox) {
  closeChatBox.addEventListener("click", () => {
    whatsappBox.style.display = "none";
    whatsappBox.setAttribute('aria-hidden', 'true');
    whatsappIcon?.focus();
  });
}

// Cerrar con ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && whatsappBox?.style.display === 'block') {
    whatsappBox.style.display = 'none';
    whatsappBox.setAttribute('aria-hidden', 'true');
    whatsappIcon?.focus();
  }
});
