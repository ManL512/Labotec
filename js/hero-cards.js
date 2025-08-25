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
