const workList = [
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

// const displayModal = () => {
//   let wrapper = document.querySelector('.body-background');
//   let buttonEl = document.querySelector('.see-more');
//   let displayActive = document.querySelector('.modal-container');
//   let close = document.querySelector('.exit-modal');
//   let nav = document.querySelector('.flexible');

//   const handleModalToggle = event => {
//     if (event.target === close) {
//       return displayActive.classList.toggle('display-block');
//     }

//     if (event.target === buttonEl) {
//      return nav.classList.add('display-none')
//     }

//     if (event.target === close) {
//      return nav.classList.remove('display-none')
//     }

//     if (event.target === buttonEl) {
//       let currentId = parseInt(event.target.id);
//       let currentWork = workList.find(({ id }) => id === currentId);

//       let workModalTitle = document.querySelector('.modal-title');
//       let workModalImg = document.querySelector('.modal-img');
//       let workModalDescription = document.querySelector('.modal-text');
//       let modalTag = document.querySelector('.modal-tag')
//       let workModalImg = '';
//       workModalImg += `<img src="${currentWork.jpeg}" alt="${currentWork.name}" />`;

//       workModalTitle.textContent = currentWork.name;
//       workModalImg.innerHTML = workModalImg;
//       workModalDescription.textContent = currentWork.description;
//       modalTag.textContent = mapSkillsTag(skill.skillTags)

//       return displayActive.classList.toggle('display-block');
//     }
//   };

//   wrapper.addEventListener('click', handleModalToggle);
//   close.addEventListener('click', handleModalToggle);
// };

// displayModal();
