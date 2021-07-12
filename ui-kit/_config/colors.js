import Color from 'color';

const BATTLESHIP = '#004f71';
const PICTON = '#0092bc';
const TUATARA = '#353535';
const WHITE_SMOKE = '#f6f6f6';
const RUBY = '#cb2c30';

const colors = {
  // LIGHT THEME
  light: {
    primary: PICTON,
    primaryHover: Color(PICTON).darken(0.25),
    primarySubdued: Color(PICTON).desaturate(0.25).lighten(0.99),
    primarySubduedHover: Color(PICTON).desaturate(0.1).lighten(0.85),
    secondary: BATTLESHIP,
    secondaryHover: Color(BATTLESHIP).darken(0.2),
    tertiary: TUATARA,
    tertiaryHover: Color(TUATARA).darken(0.2),

    neutrals: {
      100: WHITE_SMOKE,
      200: '#e7e7e7',
      300: '#cecece',
      400: '#b4b4b4',
      500: '#9b9b9b',
      600: '#818181',
      700: '#686868',
      800: '#4e4e4e',
      900: TUATARA,
    },

    alert: RUBY,
    warning: '#ffc527',
    success: '#1ec27f',
    live: RUBY,
    wordOfChrist: TUATARA,

    screen: TUATARA,
    paper: '#fff',

    black: '#000',
    white: '#fff',

    // LEGACY!
    bg: WHITE_SMOKE,
    fg: TUATARA,
    subdued: BATTLESHIP,
    border: '#cecece',
  },

  // DARK THEME
  dark: {
    primary: PICTON,
    secondary: WHITE_SMOKE,
    tertiary: BATTLESHIP,

    neutrals: {
      100: WHITE_SMOKE,
      200: '#e7e7e7',
      300: '#cecece',
      400: '#b4b4b4',
      500: '#9b9b9b',
      600: '#818181',
      700: '#686868',
      800: '#4e4e4e',
      900: TUATARA,
    },

    alert: RUBY,
    warning: '#ffc527',
    success: '#8acb88',
    live: RUBY,
    wordOfChrist: TUATARA,

    screen: '#111010',
    paper: '#202021',

    black: '#000',
    white: '#fff',

    // LEGACY!
    bg: TUATARA,
    fg: WHITE_SMOKE,
    subdued: BATTLESHIP,
    border: '#cecece',
  },
};

export default colors;
