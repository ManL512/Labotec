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

document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.addEventListener('click', function(e) {
            // Detectar si estamos en móvil
            if (window.innerWidth <= 768) {
                // Buscar el link dentro de la tarjeta
                let link = card.querySelector('a');
                if (link && link.getAttribute('href')) {
                    window.location.href = link.getAttribute('href');
                }
            } else {
                // Comportamiento normal en desktop: mostrar subtítulo y botón
                card.classList.toggle('active');
            }
        });
    });
});

