const workList = [
  {
    webp: './img/work.webp',
    jpeg: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
  },

  {
    webp: './img/work.webp',
    jpeg: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
  },

  {
    webp: './img/work.webp',
    jpeg: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
  },

  {
    webp: './img/work.webp',
    jpeg: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
  },

  {
    webp: './img/work.webp',
    jpeg: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
  },

  {
    webp: './img/work.webp',
    jpeg: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
  },
];

const skillsList = [
  {
    image: './img/icon-languages.png',
    text: 'Language',
    skillTags: ['HTML', 'css', 'JavaScript', 'Ruby on Rails'],
  },

  {
    image: './img/icon-frameworks.png',
    text: 'Frameworks',
    skillTags: ['Bootstrap', 'Ruby on Rails', 'Rspec', 'Capybara', 'Selenium'],
  },

  {
    image: './img/icon-skills.png',
    text: 'Skills',
    skillTags: ['Codekit', 'Github', 'Codepen', 'Gitlab', 'Terminal'],
  },
];

const skillsSection = document.querySelector('.skills-grid');

const workSection = document.querySelector('.work-section-grid');

function callWorks(works) {
  function mapWorksTag(works) {
    return works.map(work => `<li class="tag-buttons">${work}</li>`).join('');
  }

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
            ${mapWorksTag(work.workTags)}
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

const workListHtml = callWorks(workList);
workSection.innerHTML = workListHtml;

function callSkills(skills) {
  function mapSkillsTag(skills) {
    return skills.map(skill => `<li class="tag-buttons skill-buttons">${skill}</li>`).join('');
  }

  let innerHtml = '';

  for (let i = 0; i < skills.length; i += 1) {
    const skill = skills[i];

    innerHtml += `<li>
    <article class="image-placeholder margin-centre skills skillz">
      <img class="skills-icon" src="${skill.image}" alt="sphere" />
      <h3 class="skills-text">${skill.text}</h3>
      <ul class="tag margin-centre skill-tag">
        ${mapSkillsTag(skill.skillTags)}
      </ul>
    </article>
  </li>`;
  }
  return innerHtml;
}

const skillsListHtml = callSkills(skillsList);
skillsSection.innerHTML = skillsListHtml;

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
