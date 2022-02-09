/* eslint-disable linebreak-style */
const workLists = [
  {
    webp: './img/work.webp',
    jpeg: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
    workDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy  t of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    id: 1001,
  },

  {
    webp: './img/work.webp',
    jpeg: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
    workDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy  t of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    id: 1002,
  },

  {
    webp: './img/work.webp',
    jpeg: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
    workDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy  t of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    id: 1003,
  },

  {
    webp: './img/work.webp',
    jpeg: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
    workDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy  t of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    id: 1004,
  },

  {
    webp: './img/work.webp',
    jpeg: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
    workDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy  t of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    id: 1005,
  },

  {
    webp: './img/work.webp',
    jpeg: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
    workDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy  t of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    id: 1006,
  },
];

const skillsLists = [
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

const mapWorksTag = (works) => works.map(work => `<li class="tag-buttons">${work}</li>`).join('');

const callWorks = (works) => {
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
            value="see-projects"
            id=${work.id}
          >
          ${work.button}
          </button>
        </div>
      </article>
    </li>`;
  }
  return innerHtml;
};

const workListHtml = callWorks(workLists);
workSection.innerHTML = workListHtml;

const callSkills = (skills) => {
  const mapSkillsTag = (skills) => skills.map(skill => `<li class="tag-buttons skill-buttons">${skill}</li>`).join('');

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
};

const skillsListHtml = callSkills(skillsLists);
skillsSection.innerHTML = skillsListHtml;

const displayMenu = () => {
  const hamburger = document.querySelector('.hamburger-btn');
  const nav = document.querySelector('.mobile-menu');

  const handleHamburgerToggle = () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('active');
  };

  hamburger.addEventListener('click', handleHamburgerToggle);

  nav.addEventListener('click', handleHamburgerToggle);
};
displayMenu();

const displayModal = () => {
  const wrapper = document.querySelector('.body-background');
  const modalContainer = document.querySelector('.modal-container');
  const closeModal = document.querySelector('.exit-modal');
  const removeNav = document.querySelector('.flexible');

  // eslint-disable-next-line consistent-return
  const handleModaltoggle = (event) => {
    if (event.target === closeModal) {
      return modalContainer.classList.toggle('open');
    }

    if (event.target.value === 'see-projects') {
      const currentId = parseInt(event.target.id, 10);
      const currentWork = workLists.find(({ id }) => id === currentId);

      const workImage = document.querySelector('.modal-pic');
      const workName = document.querySelector('.modal-title');
      const workModalTags = document.querySelector('.modal-tag');
      const workModalDescription = document.querySelector('.modal-text');
      let workPreview = '';
      workPreview += `<img class='modal-img' src='${currentWork.jpeg}' alt='work-preview' />`;

      workImage.innerHTML = workPreview;
      workName.innerHTML = currentWork.title;
      workModalDescription.innerHTML = currentWork.workDescription;
      workModalTags.innerHTML = `${mapWorksTag(currentWork.workTags)}`;

      modalContainer.classList.toggle('open');
      removeNav.classList.toggle('open');
    }
  };

  wrapper.addEventListener('click', handleModaltoggle);
};

displayModal();
