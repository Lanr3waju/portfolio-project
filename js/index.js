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

function callWorks(works) {
  let innerHtml = '';

  for (let i = 0; i < works.length; i += 1) {
    const work = works[i];

    innerHtml += `<li  class="card-li">
        <div>
          <p class="name">name- ${vehicle.name}</p>
          <img src="${vehicle.images}" alt="${vehicle.name}" />
          <p class="transmission">Transmission (Auto) - ${vehicle.isAuto}</p>
          <p class="no-of-tyre">No. of Tyres - ${vehicle.noOfTyres}</p>
          <button value="show-modal" id="${vehicle.id}" class= "see-more">See More</button>
        </div>
      </li>`;
  }
  return innerHtml;
}

let carsHtml = callVehicles(cars);

carList.innerHTML = carsHtml;


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
