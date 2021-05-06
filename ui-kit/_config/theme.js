import { rem } from 'ui-kit/_utils';
import colors from './colors';

const theme = {
  breakpoints: {
    sm: rem('480px'),
    md: rem('768px'),
    lg: rem('1024px'),
    xl: rem('1366px'),
  },
  colors,
  fonts: {
    base:
      '"Inter", "Gotham A", "Gotham B", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading:
      '"Montserrat", "Gotham A", "Gotham B", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSizes: {
    base: rem('14px'),
    xxs: rem('10px'),
    xs: rem('11px'),
    s: rem('16px'),
    l: rem('20px'),
    xl: rem('24px'),
    h1: rem('43px'),
    h2: rem('33px'),
    h3: rem('24px'),
    h4: rem('20px'),
    h5: rem('16px'),
  },
  fontWeights: {
    normal: 'normal',
    bold: 'bold',
  },
  lineHeights: {
    base: '1.5',
    heading: '1.2',
    xs: rem('18.5px'),
    s: rem('24px'),
    xl: rem('34px'),
    h1: rem('45.15px'),
    h2: rem('40px'),
    h3: rem('28px'),
    h4: rem('24px'),
    h5: rem('24px'),
  },
  radii: {
    s: rem('4px'),
    base: rem('6px'),
    l: rem('10px'),
    xl: rem('16px'),
    image: rem('24px'),
    button: rem('40px'),
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
    nav:
      '0 5px 5px -5px rgb(0 0 0 / 20%)',
  },
  space: {
    header: rem('90px'),
    base: rem('20px'),
    xxs: rem('5px'),
    xs: rem('10px'),
    s: rem('14px'),
    m: rem('25px'),
    l: rem('40px'),
    xl: rem('60px'),
    xxl: rem('100px'),
  },
};

export default theme;
