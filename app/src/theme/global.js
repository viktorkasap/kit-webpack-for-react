import { injectGlobal } from '@emotion/css';

import '@fontsource/merriweather';
import '@fontsource/merriweather/300.css';
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/900.css';

import '@fontsource/material-icons-rounded';
import '@fontsource/material-icons-sharp';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  *, *::before, *::after {
      box-sizing: border-box;
  }

  html {
    height: 100%;
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
  }

  body {
    height: 100%;
    line-height: 1.5;
    font-family: merriweather, -apple-system, BlinkMacSystemFont, Roboto, Ubuntu, 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button,
  select {
    text-transform: none;
  }
`;
