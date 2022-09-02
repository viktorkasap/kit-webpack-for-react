import styled from '@emotion/styled';
import { injectGlobal } from '@emotion/css';

import 'normalize.css';

import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';

import '@fontsource/material-icons';
import '@fontsource/material-icons-outlined';
import '@fontsource/material-icons-two-tone';

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
    color: #333;
    font-family: Ubuntu, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;
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

/**
 *   primary: '#333',
 *   danger: 'tomato'
 *   warning: 'gold',
 * @type {{danger: string, primary: string}}
 */
const colors = {
  primary: '#333',
  danger: 'tomato',
  warning: 'gold',
};

/**
 *   none: 0,
 *   xxsmall: '4px',
 *   xsmall: '8px',
 *   small: '12px',
 *   medium: '20px',
 *   gutter: '24px',
 *   large: '32px',
 *   xlarge: '48px',
 *   xxlarge: '96px',
 * @type {{small: string, gutter: string, xsmall: string, large: string, xlarge: string, xxlarge: string, none: number, medium: string, xxsmall: string}}
 */
export const spacing = {
  none: 0,
  xxsmall: '4px',
  xsmall: '8px',
  small: '12px',
  medium: '20px',
  gutter: '24px',
  large: '32px',
  xlarge: '48px',
  xxlarge: '96px',
};

/**
 *   xsmall: '0.79rem',
 *   small: '0.889rem',
 *   medium: '1rem',
 *   large: '1.125rem',
 *   xlarge: '1.266rem',
 *   xxlarge: '1.424rem',
 * @type {{small: string, xsmall: string, large: string, xlarge: string, xxlarge: string, medium: string}}
 */
export const fontSizes = {
  xsmall: '0.79rem',
  small: '0.889rem',
  medium: '1rem',
  large: '1.125rem',
  xlarge: '1.266rem',
  xxlarge: '1.424rem',
};

export const Container = styled.div({
  width: '100%',
  maxWidth: 1440,
  padding: `${spacing.none} ${spacing.large}`,
  margin: '0 auto',
});

export const Button = styled.button({
  padding: `${spacing.small} ${spacing.medium}`,
  border: 'none',
  outline: 'none',
  borderRadius: '4px',
  backgroundColor: '#0f8ad7',
  fontSize: fontSizes.medium,
  color: '#fff',
  cursor: 'pointer',
  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.12)',
  transition: 'background-color .2s linear, box-shadow .2s linear',

  '&:hover': {
    backgroundColor: '#0e76b7',
    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.24)',
  },

  '&:active': {
    backgroundColor: '#0a5e92',
  },
});

export const P = styled.p({
  fontSize: fontSizes.medium,
});

export const TextXSmall = styled.p({
  fontSize: fontSizes.xsmall,
});

export const TextSmall = styled.p({
  fontSize: fontSizes.small,
});

export const TextMedium = styled.p({
  fontSize: fontSizes.medium,
});

export const TextLarge = styled.p({
  fontSize: fontSizes.large,
});

export const TextXLarge = styled.p({
  fontSize: fontSizes.xlarge,
});

export const TextXXLarge = styled.p({
  fontSize: fontSizes.xxlarge,
});

export const Text300 = styled.p({
  fontSize: fontSizes.medium,
  fontWeight: 300,
});

export const Text400 = styled.p({
  fontSize: fontSizes.medium,
  fontWeight: 400,
});

export const Text500 = styled.p({
  fontSize: fontSizes.medium,
  fontWeight: 500,
});

export const Text700 = styled.p({
  fontSize: fontSizes.medium,
  fontWeight: 700,
});

export const TextDanger = styled(TextMedium)({
  color: colors.danger,
});

export const DivPrefixer = styled.div({
  display: 'grid',
  alignItems: 'center',
  width: 100,
  height: 100,
  textAlign: 'center',
  color: colors.warning,
  transition: 'all .5s',
  userSelect: 'none',
  background: 'linear-gradient(to bottom, white, black)',
});
