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
    name: 'Plantagram',
    desc:
      'An E-Commerce site that allows guests and users to purchase house plants. Guests can browse subcategories including seasons and living conditions while searching for the new perfect addition to their home.',
    img: Plantagram,
    github: 'https://github.com/kyvycodes/event-share-app'
  },
  {
    id: uuidv4(),
    name: 'Affects of a Hue',
    desc:
      'Caramels donut candy canes gummi bears pie sesame snaps marshmallow chocolate cake. Marzipan cotton candy bonbon chocolate bonbon pudding sweet muffin. Gummies chocolate chupa chups croissant toffee carrot cake candy liquorice danish.',
    img: AffectsOfaHue,
    link: 'https://kyvycodes.github.io/affectsofahue/index.html'
  },
  {
    id: uuidv4(),
    name: "Kay's Portfolio",
    desc:
      'Cake fruitcake tart wafer wafer wafer. Shortbread gummies jelly-o gingerbread carrot cake. Jujubes cake dragée topping pie bonbon danish donut chocolate bar.',
    img:Portfolio,
    github: 'https://github.com/kyvycodes/k-react-portfolio'
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
