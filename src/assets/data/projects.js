import { v4 as uuidv4 } from 'uuid';
import MagicImg from '../images/magic.jpg'
import AffectsOfaHue from '../images/affectsofahue.png'
import EventShare from '../images/eventshare.png'
import Plantagram from '../images/plantagram.png'
import Portfolio from '../images/kaysportfolio.png'


const projects = [
  {
    id: uuidv4(),
    name: 'Event Share',
    desc:
      'Planning an event, no matter how big or small can become tedious. Our app facilitates the organization of an event by letting a user manage the logistics with input from guests. The app can be used for any get-together, family reunions, parties, among other activities.',
    img: EventShare,
    link: 'https://event-share-app.herokuapp.com/',
    github: 'https://github.com/kyvycodes/event-share-app'
    // demo:

    // features: [
// 'Javascript',
// 'React',
// 'Redux',
// 'Node.js',
// 'Express',
// 'Sequelize',
// 'PostgresSQL',
// 'SendGrid',
// 'Material-UI',
// 'Google Maps Integration',
// 'Google Calendar Integration',
// 'Mocha'
//     ]
  },
  {
    id: uuidv4(),
    name: "Kay's Portfolio",
    desc:
      'You are here ! Welcome to my portfolio, a clean design with full responsiveness. Want to chat? Be sure to fill out the contact form.',
    img: Portfolio,
    link: 'kaycodes.io',
    github: 'https://github.com/kyvycodes/kay-portfolio-react'
  },
  {
    id: uuidv4(),
    name: 'Plantagram',
    desc:
      'An E-Commerce site that allows guests and users to purchase house plants. Guests can browse subcategories including seasons and living conditions while searching for the new perfect addition to their home.',
    img: Plantagram,
    // link:
    // github:
  },
  {
    id: uuidv4(),
    name: 'Affects of a Hue',
    desc:
      'Did you know if you’re looking at sea green or lemon yellow, your brain feels a different emotion to each? Some researchers agree that our brain innately connects colors with feelings, while others believe that the feelings we associate with each color are learned. Find out more.',
    img: AffectsOfaHue,
    link: 'https://kyvycodes.github.io/affectsofahue/index.html',
    // technologies:'HTML, CSS, Flexbox'
    // github:
  },

  // { next project
    // id: uuidv4(),
    // name:
    // desc:
    // img:
    // link:
    // github:
    // features: []
  // },
];

export default projects;
