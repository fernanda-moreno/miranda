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
  subtitle: `I'm a Chemical Engineering student`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Hi! I'm a 4th year Chemical Engineering student at Georgia Tech. During my junior year, I started working as an Engineering Co-Op at Ascend Performance Materials.`,
  paragraphTwo: `On campus, I work as a student assistant at the LGBTQIA Resource Center, and I'm an active member of AIChE and the Special Events Student Advisory Board.`,
  paragraphThree: 'In my free time, I love solving puzzles and playing piano!',
  resume: 'https://www.linkedin.com/in/miranda-munoz/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ethanol.png',
    title: 'Optimization of Ethanol Separation',
    info: 'In this project, I used Aspen Plus to analyze ethanol separation from a mixture of water and glucose and compared product quality and operating costs from various separation methods including extraction, distillation, and membrane separation.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'energy.png',
    title: 'Pump Flow Analysis',
    info: 'In this project, I ran experiments to determine head loss and friction coefficients for water flow through nozzles attached to an aquarium pump, created pump curves, and determined the ratio of flowrates during split flow.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'aspen-tech.png',
    title: 'Process Simulation',
    info: 'In this project, I used Aspen Plus to simulate formaldehyde and ammonia production, and I employed a sensitivity analysis to optimize production.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// EXPERIENCE DATA
export const experienceData = [
  {
    id: nanoid(),
    img: 'ascend-1.png',
    title: 'Marketing & Medical Business Development Co-Op',
    info: 'September 2020 - December 2020',
    info2: 'During my Fall 2020 Co-Op rotation, I performed detailed market analysis for antimicrobial devices including cosmetic brushes and wound dressings; researched the causes and consequences of healthcare associated infections; and provided support to the team responsible for antimicrobial technology and marketing.',
    url: 'https://www.ascendmaterials.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ascend-1.png',
    title: 'Manufacturing Engineering Co-Op',
    info: 'January 2020 - May 2020',
    info2: 'During my Spring 2020 Co-Op rotation, I provided engineering support to the Distribution unit and Environmental department; assisted in writing a temporary procedure for an alternate benzene supply route, analyzing process hazards associated with the procedure, and executing a trial run to evaluate the effectiveness of the procedure; calculated maintenance startup and shutdown activity emissions and flare emissions; created a system to track scrubber temperature and flow monitor down time to ensure environmental compliance; and participated on the team for RC 14001 and ISO 9001 audits.',
    url: 'https://www.ascendmaterials.com/',
    repo: '', // if no repo, the button will not show up
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
