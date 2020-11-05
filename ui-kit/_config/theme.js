import { rem } from '../_utils';

const COLORS = {
  Battleship: '#828282',
  Picton: '#00aeef',
  Tuatara: '#353535',
  'White Smoke': '#f6f6f6',
};

const PRIMARY_BRAND_COLOR = COLORS['Picton'];
const PRIMARY_NEUTRAL_COLOR = COLORS['Tuatara'];

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
    bg: COLORS['White Smoke'],
    fg: PRIMARY_NEUTRAL_COLOR,
    white: '#fff',
    black: PRIMARY_NEUTRAL_COLOR,
    border: '#cbcbcb',
    neutrals: {
      100: COLORS['White Smoke'],
      200: '',
      300: '',
      400: '',
      500: '',
      600: COLORS['Battleship'],
      700: '',
      800: '',
      900: '',
    },
  },
  fonts: {
    base:
      '"Gotham A", "Gotham B", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading:
      '"Gotham A", "Gotham B", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSizes: {
    base: rem('16px'),
    xxs: rem('10px'),
    xs: rem('12px'),
    s: rem('14px'),
    l: rem('20px'),
    xl: rem('24px'),
    h1: rem('36px'),
    h2: rem('28px'),
    h3: rem('22px'),
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
    s: rem('4px'),
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
    l: rem('40px'),
    xl: rem('60px'),
    xxl: rem('100px'),
  },
};

export default theme;
