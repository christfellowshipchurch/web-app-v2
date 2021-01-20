const BATTLESHIP = '#818181';
const LH_GREEN = '#85C471';
const LH_YELLOW = '#F6CC4F';
const LH_DARK_GREEN = '#1E484E';
const TUATARA = '#353535';
const WHITE_SMOKE = '#F4F7F8';
const LH_GRADIENT_BLUE = '#429CC2';
const LH_GRADIENT_GREEN = '#8BC76A';

const BACKGROUND = '#F2F2F7';
const BORDER = '#C4C4C4';

const BLACK = '#000';
const GRAY = '#EBEBEF';
const WHITE = '#FFF';

const colors = {
  // LIGHT THEME
  light: {
    primary: LH_GREEN,
    secondary: LH_YELLOW,
    tertiary: LH_DARK_GREEN,

    gradient: [LH_GRADIENT_BLUE, LH_GRADIENT_GREEN],

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
    paper: '#FFF',

    black: BLACK,
    gray: GRAY,
    grey: GRAY,
    white: WHITE,

    // LEGACY!
    bg: BACKGROUND,
    fg: TUATARA,
    subdued: BATTLESHIP,
    border: BORDER,
  },

  // DARK THEME
  dark: {
    primary: LH_GREEN,
    secondary: LH_YELLOW,
    tertiary: LH_DARK_GREEN,

    gradient: [LH_GRADIENT_BLUE, LH_GRADIENT_GREEN],

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

    black: BLACK,
    gray: GRAY,
    grey: GRAY,
    white: WHITE,

    // LEGACY!
    bg: TUATARA,
    fg: WHITE_SMOKE,
    subdued: BATTLESHIP,
    border: BORDER,
  },
};

export default colors;
