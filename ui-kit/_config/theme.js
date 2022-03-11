import { rem } from 'ui-kit/_utils';
import colors from './colors';

const theme = {
  breakpoints: {
    sm: rem('480px'),
    md: rem('768px'),
    lg: rem('1024px'),
    xl: rem('1350px'),
  },
  colors,
  fonts: {
    base: 'Proxima-Nova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading:
      'Proxima-Nova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    serif: 'Merriweather, "Times New Roman", "Georgia", "Garamond", serif, -apple-system, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
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
    base: '1.25',
    heading: '1.1',
  },
  radii: {
    s: rem('4px'),
    base: rem('6px'),
    l: rem('10px'),
    xl: rem('16px'),
    xxl: rem('25px'),
  },
  // https://tailwindcss.com/docs/box-shadow
  /**
   * todo : these shadows values DO NOT work for the textShadow property, we'll need to come up with a fix eventually. For now we must enter the values for those manually, and just use these for boxShadows
   */
  shadows: {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    s: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    l: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
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
