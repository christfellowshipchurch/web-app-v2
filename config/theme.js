import { rem } from '../utils';

const PRIMARY_BRAND_COLOR = '#00aeef';
const PRIMARY_NEUTRAL_COLOR = '#272727';
const WHITE_SMOKE = '#f6f6f6';

const theme = {
  breakpoints: {
    sm: rem('480px'),
    md: rem('768px'),
    lg: rem('1024px'),
    xl: rem('1350px'),
  },
  colors: {
    primary: PRIMARY_BRAND_COLOR,
    error: '#fe5f55',
    success: '#8acb88',
    warning: '#ffc527',
    bg: WHITE_SMOKE,
    fg: PRIMARY_NEUTRAL_COLOR,
    white: '#fff',
    black: PRIMARY_NEUTRAL_COLOR,
    border: '#cbcbcb',
    neutrals: {
      100: WHITE_SMOKE,
      200: '',
      300: '',
      400: '',
      500: '',
      600: '',
      700: '',
      800: '',
      900: '',
    },
  },
  fonts: {
    base: 'serif',
    heading: 'sans-serif',
  },
  fontSizes: {
    base: rem('16px'),
    xxs: rem('10px'),
    xs: rem('12px'),
    s: rem('14px'),
    l: rem('20px'),
    xl: rem('24px'),
    h1: rem('28px'),
    h2: rem('22px'),
    h3: rem('20px'),
    h4: rem('18px'),
  },
  fontWeights: {
    normal: 'normal',
    bold: 'bold',
  },
  lineHeights: {
    base: '1.5',
    heading: '1.2',
  },
  radii: {
    base: rem('6px'),
  },
  // https://tailwindcss.com/docs/box-shadow
  shadows: {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    s: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    l:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    xxl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  space: {
    base: rem('20px'),
    xs: rem('5px'),
    s: rem('10px'),
    l: rem('20px'),
    xl: rem('60px'),
  },
};

export default theme;
