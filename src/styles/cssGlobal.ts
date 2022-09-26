import { colors } from './colors';
import { fonts } from './fonts';
import { createGlobalStyle } from 'styled-components';

export const CssGlobal = createGlobalStyle`
  ${colors}
  ${fonts}

  :root {
    letter-spacing: 0.75px;
    font-family: SF, sans-serif;
  }

  * {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background: #00040f;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--secondary);
  }
`;
