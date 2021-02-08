import Color from 'color';

const BATTLESHIP = '#818181';
const PICTON = '#00aeef';
const TUATARA = '#353535';
const WHITE_SMOKE = '#f6f6f6';

const colors = {
  // LIGHT THEME
  light: {
    primary: PICTON,
    primaryHover: Color(PICTON).darken(0.2),
    primarySubdued: Color(PICTON).desaturate(0.2).lighten(0.9),
    secondary: TUATARA,
    secondaryHover: Color(TUATARA).darken(0.2),
    tertiary: BATTLESHIP,
    tertiaryHover: Color(BATTLESHIP).darken(0.2),

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

    alert: '#fe5f55',
    warning: '#ffc527',
    success: '#8acb88',
    wordOfChrist: TUATARA,

    screen: WHITE_SMOKE,
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

    alert: '#fe5f55',
    warning: '#ffc527',
    success: '#8acb88',
    wordOfChrist: TUATARA,

    screen: TUATARA,
    paper: BATTLESHIP,

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
