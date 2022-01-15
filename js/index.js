const display = () => {
  const hamburger = document.querySelector('.hamburger-btn');
  const nav = document.querySelector('.mobile-menu');

  hamburger.addEventListener(
    'click',
    () => (nav.classList.toggle('open'), hamburger.classList.toggle('active')),
  );

  nav.addEventListener(
    'click',
    () => (nav.classList.toggle('open'), hamburger.classList.toggle('active')),
  );
};

display();
