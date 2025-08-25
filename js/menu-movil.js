document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobileMenuToggle');
  const menuMobile = document.getElementById('menuMobile');
  const hamburgerIcon = menuToggle?.querySelector('.hamburger-icon');
  const closeIcon = menuToggle?.querySelector('.close-icon');
  const body = document.body;
  const whatsappSection = document.querySelector('.whatsapp-button');

  if (!menuToggle || !menuMobile) return;

  function setMenuState(open) {
    menuMobile.classList.toggle('active', open);
    hamburgerIcon.style.display = open ? 'none' : 'block';
    closeIcon.style.display = open ? 'block' : 'none';
    body.classList.toggle('menu-open', open);
    if (whatsappSection) whatsappSection.style.display = open ? 'none' : 'block';
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  }

  menuToggle.addEventListener('click', () => {
    const open = !menuMobile.classList.contains('active');
    setMenuState(open);
  });

  // Cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuMobile.classList.contains('active')) {
      setMenuState(false);
      menuToggle.focus();
    }
  });

  // Cierra al hacer click fuera
  menuMobile.addEventListener('click', (e) => {
    if (e.target === menuMobile) setMenuState(false);
  });
});
