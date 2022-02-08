import { createGlobalStyle } from "styled-components";
import pxtovw from '../../utils/pxtovw';

export const colors = {
  primaryBlue: '#122D58',
  primaryYellow: '#FFF28D',
  primaryGrey: '#EFEFEF',
  primaryGreyDark: '#7B7B7B',
  primaryGreyLight: '#F1F2F5',
  primaryWhite: '#FFFFFF',
  
  primaryBlueTransp: '#122D5899',

  colorBorderBase: '#C4C4C4',
  colorTextBase: '#777777',
  colorTextBaseLight: '#F0EFEF',
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #FFFFFF;
  }

  body,
  p,
  input,
  button,
  textarea {
    font: 500 1.125rem Montserrat;
    font-family: Montserrat, sans-serif;
    color: ${colors.colorTextBase};

    @media (max-width: 375px) {
      font-size: 1.5rem;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Montserrat, sans-serif;
  }

  input {
    border: none;

    &:focus {
      outline: none;
    }
  }

  .container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  :root {
    font-size: ${pxtovw(16)};
    overflow-x: hidden;
  }

  @media (max-width: 768px) {
    :root {
      font-size: ${pxtovw(24)};
    }
  }

  @media (max-width: 375px) {
    :root {
      font-size: ${pxtovw(36)};
    }
  }
`;

export default GlobalStyle;