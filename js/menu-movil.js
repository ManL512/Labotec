document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const menuMobile = document.getElementById('menuMobile');
    const hamburgerIcon = menuToggle.querySelector('.hamburger-icon');
    const closeIcon = menuToggle.querySelector('.close-icon');
    const body = document.body;

    menuToggle.addEventListener('click', function() {
        // Alternar la visibilidad del menú
        menuMobile.classList.toggle('active');
        
        // Alternar los íconos
        if (menuMobile.classList.contains('active')) {
            hamburgerIcon.style.display = 'none';
            closeIcon.style.display = 'block';
            body.classList.add('menu-open'); // Bloquear scroll
        } else {
            hamburgerIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            body.classList.remove('menu-open'); // Permitir scroll
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const menuMobile = document.getElementById('menuMobile');
    const whatsappSection = document.querySelector('.whatsapp-button');

    mobileMenuToggle.addEventListener('click', () => {
        const hamburgerIcon = mobileMenuToggle.querySelector('.hamburger-icon');
        const closeIcon = mobileMenuToggle.querySelector('.close-icon');

        // Cuando el menú está abierto
        if (hamburgerIcon.style.display === 'none') {
            // Ocultar la sección de WhatsApp
            whatsappSection.style.display = 'none';
        } else {
            // Mostrar la sección de WhatsApp cuando el menú se cierra
            whatsappSection.style.display = 'block';
        }
    });
});