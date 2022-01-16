const display = () => {
  const hamburger = document.querySelector('.hamburger-btn');
  const nav = document.querySelector('.mobile-menu');

  const handleHamburgerToggle = () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('active');
  };

  hamburger.addEventListener('click', handleHamburgerToggle);

  nav.addEventListener('click', handleHamburgerToggle);
};

display();
