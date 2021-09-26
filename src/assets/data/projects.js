import { v4 as uuidv4 } from 'uuid';
// import ProjectImg from '../images/projectImg.png';
// import UTrackerImg from '../images/utracker.jpg';
// import GreenCtgImg from '../images/greenctg.jpg';
// import CoinTrackerImg from '../images/cointracker.jpg';
// import CavinImg from '../images/cavinimg.jpg';
import MagicImg from '../images/magic.jpg'

const projects = [
  {
    id: uuidv4(),
    name: 'Event Share',
    desc:
      'Planning an event, no matter how big or small can become tedious. Our app facilitates the organization of an event by letting a user manage the logistics with input from guests. The app can be used for any get-together, family reunions, parties, among other activities.',
    img: MagicImg,
    // features: [
      // Javascript
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
    img: MagicImg,
    // features: ['User can view a list of options',
// 'User can choose a single plant',
// 'User can filter for inventory of a specific season',
// 'User can add items to a cart',
// 'User can create an account to log in',
// 'User can log in using Google account',
// 'When the user is not logged in they may still alter shopping cart using local storage',
// 'User my check out logged in or as a guest',
// 'Admin can view each users information]'
  },
  {
    id: uuidv4(),
    name: 'Caramels Donut',
    desc:
      'Caramels donut candy canes gummi bears pie sesame snaps marshmallow chocolate cake. Marzipan cotton candy bonbon chocolate bonbon pudding sweet muffin. Gummies chocolate chupa chups croissant toffee carrot cake candy liquorice danish.',
    img: MagicImg,
    // features: []
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc:
      'Cake fruitcake tart wafer wafer wafer. Shortbread gummies jelly-o gingerbread carrot cake. Jujubes cake dragée topping pie bonbon danish donut chocolate bar.',
    img: MagicImg,
    // features: []
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'Pudding bonbon lemon drops fruitcake topping pastry marshmallow pudding cupcake. Icing icing candy croissant gummies pastry. Danish oat cake marzipan topping jujubes macaroon biscuit candy canes.',
    img: MagicImg,
    // features: []
  },
];

export default projects;
