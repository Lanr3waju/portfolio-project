const multiPostStories = [
  {
    jpeg: './img/work.webp',
    webp: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    tag1: 'Ruby on Rails',
    tag2: 'CSS',
    tag3: 'JavaScript',
    tag4: 'HTML',
  },
];



const workSection = document.querySelector('.work-section-grid');



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
