const hamburger = document.querySelector('.hamburger-btn');
const nav = document.querySelector('.mobile-menu');
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
  const displayWorks = works => {
    works.forEach(workList => {
      const { imageURL, id, title, workTags } = workList;

      const workLI = document.createElement('li');

      const imagePlaceholder = document.createElement('article');
      imagePlaceholder.className = 'image-placeholder margin-centre';

      const picture = document.createElement('img');
      picture.src = imageURL;
      picture.className = 'work-img';
      picture.alt = title;

      const textPlaceholder = document.createElement('div');
      textPlaceholder.className = 'text-placeholder margin-centre';

      const sectionHeader = document.createElement('h3');
      sectionHeader.className = 'project-title';
      const sectionHeaderText = document.createTextNode(title);
      sectionHeader.appendChild(sectionHeaderText);

      const tagButtons = document.createElement('ul');
      tagButtons.className = 'tag margin-centre';

      workTags.forEach(item => {
        const eachTag = item;

        const tag = document.createElement('li');
        tag.className = 'tag-buttons';

        const tagText = document.createTextNode(eachTag);
        tag.appendChild(tagText);

        tagButtons.appendChild(tag);
      });

      const seeProjectsButton = document.createElement('button');
      seeProjectsButton.name = 'enable-button';
      seeProjectsButton.className = 'see-projects enable-button';
      seeProjectsButton.type = 'submit';
      seeProjectsButton.value = 'see-projects';
      seeProjectsButton.id = id;
      const seeProjectsButtonText = document.createTextNode('See-Projects');
      seeProjectsButton.appendChild(seeProjectsButtonText);

      textPlaceholder.appendChild(sectionHeader);
      textPlaceholder.appendChild(tagButtons);
      textPlaceholder.appendChild(seeProjectsButton);

      imagePlaceholder.appendChild(picture);
      imagePlaceholder.appendChild(textPlaceholder);

      workLI.appendChild(imagePlaceholder);

      workSection.appendChild(workLI);
    });
  };

  const displaySkills = skills => {
    skills.forEach(item => {
      const skillList = item;
      const { image, text, skillTags } = skillList;

      const skillLi = document.createElement('li');

      const imagePlaceholder = document.createElement('article');
      imagePlaceholder.className = 'image-placeholder margin-centre skills skillz';

      const picture = document.createElement('img');
      picture.src = image;
      picture.className = 'skills-icon';
      picture.alt = 'skills icon';

      const sectionHeader = document.createElement('h3');
      sectionHeader.className = 'skills-text';
      const sectionHeaderText = document.createTextNode(text);
      sectionHeader.appendChild(sectionHeaderText);

      const tagButtons = document.createElement('ul');
      tagButtons.className = 'tag skill-tag margin-centre';

      skillTags.forEach(item => {
        const eachTag = item;

        const tag = document.createElement('li');
        tag.className = 'tag-buttons skill-buttons';

        const tagText = document.createTextNode(eachTag);
        tag.appendChild(tagText);

        tagButtons.appendChild(tag);
      });

      imagePlaceholder.appendChild(picture);
      imagePlaceholder.appendChild(tagButtons);

      skillLi.appendChild(imagePlaceholder);
      skillsSection.appendChild(skillLi);
    });
  };

  displayWorks(workLists);
  displaySkills(skillsLists);
};

const toggleMobileMenu = () => {
  const handleHamburgerToggle = () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('active');
  };

  hamburger.addEventListener('click', handleHamburgerToggle);

  nav.addEventListener('click', handleHamburgerToggle);
};

const displayModal = () => {
  const wrapper = document.querySelector('.body-background');
  const modalContainer = document.querySelector('.modal-container');
  const closeModal = document.querySelector('.exit-modal');
  const removeNav = document.querySelector('.flexible');

  const handleModaltoggle = event => {
    const { target } = event;
    if (target === closeModal) {
      modalContainer.classList.toggle('open');
      removeNav.classList.toggle('open');
    }

    if (target.value === 'see-projects') {
      const currentId = parseInt(target.id, 10);
      const currentWork = workLists.find(({ id }) => id === currentId);
      const { imageURL, title, workDescription } = currentWork;

      const workImage = document.querySelector('.modal-pic');
      const workName = document.querySelector('.modal-title');
      const workModalTags = document.querySelector('.modal-tag');
      const workModalDescription = document.querySelector('.modal-text');

      const workPreview = document.createElement('img');
      workPreview.className = 'modal-img';
      workPreview.src = imageURL;
      workPreview.alt = 'work-preview';

      const modalChild = workImage.firstElementChild;

      if (modalChild) {
        workImage.replaceChild(workPreview, modalChild);
      } else {
        workImage.appendChild(workPreview);
      }

      workName.textContent = title;

      workModalDescription.textContent = workDescription;

      const tagList = document.createElement('ul');
      tagList.className = 'tag modal-tag margin-centre';

      currentWork.workTags.forEach(eachTag => {
        const tag = document.createElement('li');
        tag.className = 'tag-buttons';

        const tagText = document.createTextNode(eachTag);
        tag.appendChild(tagText);

        tagList.appendChild(tag);
      });

      workModalTags.replaceWith(tagList);

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
