import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bo-at -Web Developer', 
  lang: 'en', 
  description: 'Bo-at is a full stack software developer proficient in Javascript, React, Next.js, Node.js, PostgresSQL', 
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Bo-at',
  subtitle: 'I am a Full Stack Developer',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'newprofile.png',
  paragraphOne:
    'Hello there, Bo-at here, a full stack Javascript developer, recently completed the Complete Web Developer in 2021: Zero to Mastery program.',
  paragraphTwo:
    "My coding journey started with a deep interest in software as a service ventures because I believe in building software solutions which make a positive impact on people's lives.",
  paragraphThree:
    'Joining the Zero to Mastery academy, helped with developing fundamental programming skills, i.e proficiency in HTML, CSS, Javascript, React, Nodejs, Expressjs and Postgres SQL.',
  resume: '../../resume/resume.pdf',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'todoList.JPG',
    title: 'Vanilla Javascript TodoList',
    info: 'This project, courtesy of Dev Ed tutorial, covered Javascript fundamentals, mostly DOM manipulation',
    info2: 'It included adding event listeners as well storing todo items in local storage.',
    url: 'https://wrg9bs.github.io/TODO-List/',
    repo: 'https://github.com/wrg9bs/TODO-List',
  },
  {
    id: nanoid(),
    img: 'blackjack.JPG',
    title: 'Blackjack',
    info: 'This is another Javascript basics project, the latter part of the project included asynchronous functions. It was a fun project, courtesy of The Clever Programmer YouTube channel.',
    url: 'https://wrg9bs.github.io/Blackjack-app/',
    repo: 'https://github.com/wrg9bs/Blackjack-app',
  },
  {
    id: nanoid(),
    img: 'smartbrain.JPG',
    title: 'Smart-brain-app',
    info: 'This is a full stack application, the front-end built with React, and the backend with Nodejs and Expressjs. Used Postgres SQL database to store users and login information.',
    info2: 'The project files are uploaded to Heroku',
    url: 'https://smart-bee.herokuapp.com/',
    repo: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'boatzir@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Boat20159151',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bo-at-setobele-109548223',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/wrg9bs',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
