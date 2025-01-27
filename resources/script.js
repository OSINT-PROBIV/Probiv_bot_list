document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  function closeMenu() {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');

  }
  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
  navLinks.forEach(function(link){
    link.addEventListener('click', closeMenu);
  })
  document.addEventListener('click', function(event) {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target) && navMenu.classList.contains('active')) {
      closeMenu()
    }
  });
});
