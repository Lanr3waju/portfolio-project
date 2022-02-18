const mapLists = (lists, className) =>
  lists.map(listItem => `<li class="${className}">${listItem}</li>`).join('');

const skillsSection = document.querySelector('.skills-grid');
const workSection = document.querySelector('.work-section-grid');

const workLists = [
  {
    imageURL: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'React'],
    workDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy  t of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    id: 1001,
  },

  {
    imageURL: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Vue'],
    workDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy  t of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    id: 1002,
  },

  {
    imageURL: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    workTags: ['PHP', 'CSS', 'JavaScript', 'HTML'],
    workDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy  t of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    id: 1003,
  },

  {
    imageURL: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'GraphQL', 'Postgress'],
    workDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy  t of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    id: 1004,
  },

  {
    imageURL: './img/work.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    workTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    workDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy  t of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    id: 1005,
  },

  {
    imageURL: './img/work.jpg',
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

const loadPageDynamically = () => {
  const callWorks = () => {
    for (let x = 0; x < workLists.length; x += 1) {
      const workList = workLists[x];
      const workLi = document.createElement('li');

      const imagePlaceholder = document.createElement('article');
      imagePlaceholder.className = 'image-placeholder margin-centre';

      const picture = document.createElement('img');
      picture.src = workList.imageURL;
      picture.className = 'work-img';
      picture.alt = workList.name;

      const textPlaceholder = document.createElement('div');
      textPlaceholder.className = 'text-placeholder margin-centre';

      const sectionHeader = document.createElement('h3');
      sectionHeader.className = 'project-title';
      const sectionHeaderText = document.createTextNode(workList.title);
      sectionHeader.appendChild(sectionHeaderText);

      const tagButtons = document.createElement('ul');
      tagButtons.className = 'tag margin-centre';

      for (let i = 0; i < workList.workTags.length; i += 1) {
        const eachTag = workList.workTags[i];

        const tag = document.createElement('li');
        tag.className = 'tag-buttons';

        const tagText = document.createTextNode(eachTag);
        tag.appendChild(tagText);

        tagButtons.appendChild(tag);
      }

      const seeProjectsButton = document.createElement('button');
      seeProjectsButton.name = 'enable-button';
      seeProjectsButton.className = 'see-projects enable-button';
      seeProjectsButton.type = 'submit';
      seeProjectsButton.value = 'see-projects';
      seeProjectsButton.id = 'workList.id';
      const seeProjectsButtonText = document.createTextNode('See-Projects');
      seeProjectsButton.appendChild(seeProjectsButtonText);

      textPlaceholder.appendChild(sectionHeader);
      textPlaceholder.appendChild(tagButtons);
      textPlaceholder.appendChild(seeProjectsButton);

      imagePlaceholder.appendChild(picture);
      imagePlaceholder.appendChild(textPlaceholder);

      workLi.appendChild(imagePlaceholder);
      workSection.appendChild(workLi);
    }
  };
  callWorks(workLists);

  const callSkills = () => {
    for (let x = 0; x < skillsLists.length; x += 1) {
      const skillList = skillsLists[x];
      const skillLi = document.createElement('li');

      const imagePlaceholder = document.createElement('article');
      imagePlaceholder.className = 'image-placeholder margin-centre skills skillz';

      const picture = document.createElement('img');
      picture.src = skillList.image;
      picture.className = 'skills-icon';
      picture.alt = skillList.name;

      const sectionHeader = document.createElement('h3');
      sectionHeader.className = 'skills-text';
      const sectionHeaderText = document.createTextNode(skillList.text);
      sectionHeader.appendChild(sectionHeaderText);

      const tagButtons = document.createElement('ul');
      tagButtons.className = 'tag skill-tag margin-centre';

      for (let i = 0; i < skillList.skillTags.length; i += 1) {
        const eachTag = skillList.skillTags[i];

        const tag = document.createElement('li');
        tag.className = 'tag-buttons skill-buttons';

        const tagText = document.createTextNode(eachTag);
        tag.appendChild(tagText);

        tagButtons.appendChild(tag);
      }

      imagePlaceholder.appendChild(picture);
      imagePlaceholder.appendChild(tagButtons);

      skillLi.appendChild(imagePlaceholder);
      skillsSection.appendChild(skillLi);
    }
  };

  callSkills(skillsLists);
};

const toggleMobileMenu = () => {
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
};

const displayModal = () => {
  const wrapper = document.querySelector('.body-background');
  const modalContainer = document.querySelector('.modal-container');
  const closeModal = document.querySelector('.exit-modal');
  const removeNav = document.querySelector('.flexible');

  const handleModaltoggle = event => {
    if (event.target === closeModal) {
      modalContainer.classList.toggle('open');
      removeNav.classList.toggle('open');
    }

    if (event.target.value === 'see-projects') {
      const currentId = parseInt(event.target.id, 10);
      const currentWork = workLists.find(({ id }) => id === currentId);
      const { imageURL, title, workDescription, workTags } = currentWork;

      const workImage = document.querySelector('.modal-pic');
      const workName = document.querySelector('.modal-title');
      const workModalTags = document.querySelector('.modal-tag');
      const workModalDescription = document.querySelector('.modal-text');
      let workPreview = '';
      workPreview += `<img class='modal-img' src='${imageURL[1]}' alt='work-preview' />`;

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

const startApp = () => {
  loadPageDynamically();
  toggleMobileMenu();
  displayModal();
};

startApp();
