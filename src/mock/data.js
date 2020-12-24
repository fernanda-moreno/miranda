import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: `Miranda Munoz`, // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Miranda Munoz',
  subtitle: `I'm a Chemical Engineer`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Hi! I'm a 4th year Chemical Engineering student at Georgia Tech. During my junior year, I became
  a Manufacturing Engineering Co-Op at Ascend Performance Materials.`,
  paragraphTwo: `On campus, I'm involved with the LGBTQIA Resource Center, AICHE, and the Event Plannning Student Advisory Board.`,
  paragraphThree: 'In my free time, I love solving puzzles and playing Minecraft!',
  resume: 'https://www.linkedin.com/in/miranda-munoz/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mmunoz37@gatech.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/miranda-munoz/',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:mmunoz37@gatech.edu',
    },
    {
      id: nanoid(),
      name: 'file-text',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
