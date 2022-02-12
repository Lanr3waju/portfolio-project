/* eslint-disable linebreak-style */
const startApp = () => {
  const workLists = [

    {
      imageURL: ['./img/work.webp', './img/work.jpg'],
      title: 'Multi-Post Stories Gain+Glory',
      workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'React'],
      workDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy  t of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      id: 1001,
    },

    {
      imageURL: ['./img/work.webp', './img/work.jpg'],
      title: 'Multi-Post Stories Gain+Glory',
      workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Vue'],
      workDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy  t of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      id: 1002,
    },

    {
      imageURL: ['./img/work.webp', './img/work.jpg'],
      title: 'Multi-Post Stories Gain+Glory',
      workTags: ['PHP', 'CSS', 'JavaScript', 'HTML'],
      workDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy  t of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      id: 1003,
    },

    {
      imageURL: ['./img/work.webp', './img/work.jpg'],
      title: 'Multi-Post Stories Gain+Glory',
      workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'GraphQL', 'Postgress'],
      workDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy  t of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      id: 1004,
    },

    {
      imageURL: ['./img/work.webp', './img/work.jpg'],
      title: 'Multi-Post Stories Gain+Glory',
      workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
      workDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy  t of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      id: 1005,
    },

    {
      imageURL: ['./img/work.webp', './img/work.jpg'],
      title: 'Multi-Post Stories Gain+Glory',
      workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
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

  const mapLists = (Lists, className) => Lists.map(ListItem => `<li class="${className}">${ListItem}</li>`).join('');

  const callWorks = () => {
    let innerHtml = '';
    const cardsObject = ({
      imageURL, title, workTags, id,
    }) => {
      innerHtml += ` <li>
      <article class="image-placeholder  margin-centre">
        <picture>
          <source class="work-img" srcset="${imageURL[0]}" type="image/webp" />
          <img class="work-img" src="${imageURL[1]}" alt="work-preview" />
        </picture>
        <div class="text-placeholder margin-centre">
          <h3 class="project-title">
          ${title}
          </h3>

          <ul class="tag margin-centre ">
            ${mapLists(workTags, 'tag-buttons')}
          </ul>
          <button
            name="enable-button"
            class="see-projects enable-button"
            type="submit"
            value="see-projects"
            id=${id}
          >
          See Projects
          </button>
        </div>
      </article>
    </li>`;
    };
    workLists.map(cardsObject);
    return innerHtml;
  };

  const workListHtml = callWorks(workLists);
  workSection.innerHTML = workListHtml;

  const callSkills = () => {
    let innerHtml = '';
    const cardsObject = ({
      image, text, skillTags,
    }) => {
      innerHtml += `<li>
    <article class="image-placeholder margin-centre skills skillz">
      <img class="skills-icon" src="${image}" alt="sphere" />
      <h3 class="skills-text">${text}</h3>
      <ul class="tag margin-centre skill-tag">
        ${mapLists(skillTags, 'tag-buttons skill-buttons')}
      </ul>
    </article>
  </li>`;
    };
    skillsLists.map(cardsObject);
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

    const handleModaltoggle = event => {
      if (event.target === closeModal) {
        modalContainer.classList.toggle('open');
      }

      if (event.target.value === 'see-projects') {
        const currentId = parseInt(event.target.id, 10);
        const currentWork = workLists.find(({ id }) => id === currentId);
        const {
          imageURL, title, workDescription, workTags,
        } = currentWork;

        const workImage = document.querySelector('.modal-pic');
        const workName = document.querySelector('.modal-title');
        const workModalTags = document.querySelector('.modal-tag');
        const workModalDescription = document.querySelector('.modal-text');
        let workPreview = '';
        workPreview += `<img class='modal-img' src='${
          imageURL[1]
        }' alt='work-preview' />`;

        workImage.innerHTML = workPreview;
        workName.innerHTML = title;
        workModalDescription.innerHTML = workDescription;
        workModalTags.innerHTML = `${mapLists(workTags, 'tag-buttons')}`;

        modalContainer.classList.toggle('open');
        removeNav.classList.toggle('open');
      }
    };

    wrapper.addEventListener('click', handleModaltoggle);
  };

  displayModal();
};

startApp();