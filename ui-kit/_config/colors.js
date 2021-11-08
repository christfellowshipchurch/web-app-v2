import Color from 'color';

//Defining colors

//Brand Colors
const OCEAN = '#0092bc';
const OCEAN_SUBDUED = '#B5E4F1';
const OCEAN_HOVER = '#007899';

const NAVY = '#004f71';

const COTTON_CANDY = '#6bcaba';

//Accent Colors
const COCONUT = '#d0d0ce';
const APPLE = '#cb2c30';
const TANGERINE = '#ff8f1c';
const PEACH = '#e8927c';
const LEMON = '#fcd757';

//System Colors
const ALERT = '#cb045b';
const WARNING = '#ffc527';
const SUCCESS = '#1ec27f';

//Neutral Colors
const WHITE = '#ffffff';
const BLACK = '#000000';
const WHITE_SMOKE = '#f6f6f6';

const colors = {
  // LIGHT THEME
  light: {
    primary: OCEAN,
    primaryHover: Color(OCEAN).saturate(0.1).lighten(0.5),
    primarySubdued: Color(OCEAN).desaturate(0.1).lighten(0.75),
    primarySubduedHover: Color(OCEAN).desaturate(0.1).lighten(0.85),

    secondary: NAVY,
    secondaryHover: Color(NAVY).darken(0.2),

    tertiary: COTTON_CANDY,
    tertiaryHover: Color(COTTON_CANDY).darken(0.2),

    neutrals: {
      100: WHITE_SMOKE,
      200: '#e7e7e7',
      300: '#cecece',
      400: '#b4b4b4',
      500: '#9b9b9b',
      600: '#818181',
      700: '#686868',
      800: '#4e4e4e',
      900: '#353535',
    },

    alert: ALERT,
    warning: WARNING,
    success: SUCCESS,
    live: ALERT,
    wordOfChrist: NAVY,

    screen: NAVY,
    paper: WHITE,

    black: BLACK,
    white: WHITE,

    // LEGACY!
    bg: WHITE_SMOKE,
    fg: '#353535',
    subdued: COTTON_CANDY,
    border: '#cecece',
  },

  // DARK THEME
  dark: {
    primary: OCEAN,
    secondary: WHITE_SMOKE,
    tertiary: COTTON_CANDY,

    neutrals: {
      100: '#353535',
      200: '#4e4e4e',
      300: '#686868',
      400: '#818181',
      500: '#9b9b9b',
      600: '#b4b4b4',
      700: '#cecece',
      800: '#e7e7e7',
      900: WHITE_SMOKE,
    },

    alert: ALERT,
    warning: WARNING,
    success: SUCCESS,
    live: ALERT,
    wordOfChrist: NAVY,

    screen: '#111010',
    paper: '#202021',

    black: BLACK,
    white: WHITE,

    // LEGACY!
    bg: NAVY,
    fg: WHITE_SMOKE,
    subdued: COTTON_CANDY,
    border: '#cecece',
  },
};

export default colors;
