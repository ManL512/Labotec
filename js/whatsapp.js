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

document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            // Toggle de la clase 'active' para mostrar/ocultar la información adicional
            card.classList.toggle('active');
        });
    });
});
const hamburgerMenu = document.getElementById('hamburgerMenu');
const menuMobile = document.getElementById('menuMobile');

// Toggle mobile menu visibility
hamburgerMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('open');
});

// Close the menu on window resize (if larger than 768px)
window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
        menuMobile.classList.remove('open');
    }
});

// Variable to store the previous scroll position
let lastScrollPosition = 0;

// Add a scroll event listener
window.addEventListener('scroll', () => {
    // Check if the screen width is less than or equal to 768px (mobile screens)
    if (window.innerWidth <= 768) {
        // Get the current scroll position
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > 0) {
            if (currentScrollPosition > lastScrollPosition) {
                // If scrolling down, hide the hamburger menu
                hamburgerMenu.style.display = 'none';
            } else {
                // If scrolling up, show the hamburger menu
                hamburgerMenu.style.display = 'block';
            }
        } else {
            // Always show the hamburger menu when at the top of the page
            hamburgerMenu.style.display = 'block';
        }

        // Update the last scroll position
        lastScrollPosition = currentScrollPosition;
    }
});


//ocultar boton de whatsapp mientras se tiene abierto menu mobile
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const menuMobile = document.getElementById('menuMobile');
    const body = document.body;

    hamburgerMenu.addEventListener('click', () => {
        menuMobile.classList.toggle('active');
        body.classList.toggle('menu-mobile-active');
    });
});
