import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #f5f3ef;
    --gray-1:  black;
    --deep-dark: #ebdcd3;
    --gray-2: #534344;
    --white: #efeae5;
    --black: #100f0e;
// #87685a
// #d8af95
// #ebdcd3
// #ecddd6
// #e6b396
// #a49a95
// #100f0e
// rgb(238, 214, 186)
// #ecd1d1


// backup set
// #e6afb5
// #e9bcc1
// #c18088
// #271d1d
// #534344
// #efeae5
// #FFC0CB

  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;
export default GlobalStyles;
