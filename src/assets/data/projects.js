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
    name: 'Jelly Beans Powder',
    desc:
      'Jelly beans powder powder macaroon pie sesame snaps. Marshmallow pudding chupa chups marzipan ice cream donut. Jelly cake cupcake tootsie roll ice cream pie. Dragée sugar plum sesame snaps gummi bears tart bonbon.',
    img: MagicImg,
  },
  {
    id: uuidv4(),
    name: 'Gummies Cupcake',
    desc:
      'Gummies cupcake halvah cupcake cotton candy sugar plum topping sweet brownie. Chupa chups cupcake ice cream liquorice halvah. Gingerbread pudding jelly chupa chups sweet roll pudding gummi bears.',
    img: MagicImg,
  },
  {
    id: uuidv4(),
    name: 'Caramels Donut',
    desc:
      'Caramels donut candy canes gummi bears pie sesame snaps marshmallow chocolate cake. Marzipan cotton candy bonbon chocolate bonbon pudding sweet muffin. Gummies chocolate chupa chups croissant toffee carrot cake candy liquorice danish.',
    img: MagicImg,
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc:
      'Cake fruitcake tart wafer wafer wafer. Shortbread gummies jelly-o gingerbread carrot cake. Jujubes cake dragée topping pie bonbon danish donut chocolate bar.',
    img: MagicImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'Pudding bonbon lemon drops fruitcake topping pastry marshmallow pudding cupcake. Icing icing candy croissant gummies pastry. Danish oat cake marzipan topping jujubes macaroon biscuit candy canes.',
    img: MagicImg,
  },
];

export default projects;
