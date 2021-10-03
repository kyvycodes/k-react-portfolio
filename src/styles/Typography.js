import { createGlobalStyle } from 'styled-components';
import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';

import PoppinsSemiBold from '../assets/fonts/Poppins-SemiBold.ttf';
import WorkSans from '../assets/fonts/WorkSans-Regular.ttf'
import EphesisRegular from '../assets/fonts/Ephesis-Regular.ttf'

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Poppins SemiBold';
    src: url(${PoppinsSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'WorkSans Regular';
    src: url(${WorkSans});
    font-style: normal;
  }
  @font-face {
    font-family: 'Ephesis Regular';
    src: url(${EphesisRegular});
    font-style: normal;
  }

  // @font-face {
  //   font-family: 'WorkSans Regular';
  //   src: url(${RobotoMonoRegular});
  //   font-style: normal;
  // }
  // @font-face {
  //   font-family: 'Montserrat SemiBold';
  //   src: url(${MontserratSemiBold});
  //   font-style: normal;
  // }
  // @font-face {
  //   font-family: 'Poppins SemiBold';
  //   src: url(${MontserratBold});
  //   font-style: normal;
  // }

  html{
    font-family: 'WorkSans Regular';
    color: #87685a;
  }
  *{
    font-family: 'WorkSans Regular';
    color: #534344;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Poppins SemiBold',
  }
`;

export default Typography;
