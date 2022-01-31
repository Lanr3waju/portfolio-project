const multiPostStories = [
  {
    webp: './img/work.webp',
    jpeg: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    tag1: 'Ruby on Rails',
    tag2: 'CSS',
    tag3: 'JavaScript',
    tag4: 'HTML',
    button: 'See Project',
  },

  {
    webp: './img/work.webp',
    jpeg: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    tag1: 'Ruby on Rails',
    tag2: 'CSS',
    tag3: 'JavaScript',
    tag4: 'HTML',
    button: 'See Project',
  },

  {
    webp: './img/work.webp',
    jpeg: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    tag1: 'Ruby on Rails',
    tag2: 'CSS',
    tag3: 'JavaScript',
    tag4: 'HTML',
    button: 'See Project',
  },

  {
    webp: './img/work.webp',
    jpeg: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    tag1: 'Ruby on Rails',
    tag2: 'CSS',
    tag3: 'JavaScript',
    tag4: 'HTML',
    button: 'See Project',
  },

  {
    webp: './img/work.webp',
    jpeg: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    tag1: 'Ruby on Rails',
    tag2: 'CSS',
    tag3: 'JavaScript',
    tag4: 'HTML',
    button: 'See Project',
  },

  {
    webp: './img/work.webp',
    jpeg: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    tag1: 'Ruby on Rails',
    tag2: 'CSS',
    tag3: 'JavaScript',
    tag4: 'HTML',
    button: 'See Project',
  },
];

const workSection = document.querySelector('.work-section-grid');

function callWorks(works) {
  let innerHtml = '';

  for (let i = 0; i < works.length; i += 1) {
    const work = works[i];

    innerHtml += ` <li>
      <article class="image-placeholder  margin-centre">
        <picture>
          <source class="work-img" srcset="${work.webp}" type="image/webp" />
          <img class="work-img" src="${work.jpeg}" alt="work-preview" />
        </picture>
        <div class="text-placeholder margin-centre">
          <h3 class="project-title">
          ${work.title}
          </h3>

          <ul class="tag margin-centre ">
            <li class="tag-buttons">${work.tag1}</li>
            <li class="tag-buttons">${work.tag2}</li>
            <li class="tag-buttons">${work.tag3}</li>
            <li class="tag-buttons">${work.tag4}</li>
          </ul>
          <button
            name="enable-button"
            class="see-projects enable-button"
            type="submit"
            value="See Project"
          >
          ${work.button}
          </button>
        </div>
      </article>
    </li>`;
  }
  return innerHtml;
}

const multiPostStoriesHtml = callWorks(multiPostStories);

workSection.innerHTML = multiPostStoriesHtml;

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
