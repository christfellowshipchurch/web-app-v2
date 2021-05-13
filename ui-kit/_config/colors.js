const BATTLESHIP = '#818181';
const LH_GREEN = '#85C471';
const LH_YELLOW = '#F6CC4F';
const LH_ORANGE = '#EF886D';
const LH_DARK_GREEN = '#1E484E';
const TUATARA = '#27272E';
const WHITE_SMOKE = '#F4F7F8';
const LH_GRADIENT_BLUE = '#429CC2';
const LH_GRADIENT_GREEN = '#8BC76A';

const BACKGROUND = '#FFF';
const BACKGROUND_SECONDARY = '#F9F9FB';
const BORDER = '#C4C4C4';

const ALMOST_BLACK = '#1C1C1E';
const BLACK = '#000000';
const GRAY = '#F2F2F7';
const WHITE = '#FFFFFF';

const universal = {
  primary: LH_GREEN,
  secondary: LH_YELLOW,
  tertiary: LH_DARK_GREEN,
  quaternary: LH_ORANGE,

  neutrals: {
    100: WHITE_SMOKE,
    200: '#e7e7e7',
    300: '#cecece',
    400: '#b4b4b4',
    500: '#9b9b9b',
    600: '#8E8E93',
    700: '#686868',
    800: '#2C2C2E',
    900: TUATARA,
  },

  alert: '#fe5f55',
  warning: '#ffc527',
  success: '#8acb88',
  wordOfChrist: TUATARA,

  gradient: [LH_GRADIENT_BLUE, LH_GRADIENT_GREEN],

  almost_black: ALMOST_BLACK,
  black: BLACK,
  gray: GRAY,
  grey: GRAY,
  white: WHITE,
};

const colors = {
  ...universal,

  // LIGHT THEME
  light: {
    ...universal,

    screen: WHITE_SMOKE,
    paper: '#FFF',
    bg_alt: BACKGROUND_SECONDARY,

    // LEGACY!
    bg: BACKGROUND,
    fg: TUATARA,
    subdued: BATTLESHIP,
    border: BORDER,
  },

  // DARK THEME
  dark: {
    ...universal,

    screen: TUATARA,
    paper: BATTLESHIP,

    // LEGACY!
    bg: TUATARA,
    fg: WHITE_SMOKE,
    subdued: BATTLESHIP,
    border: BORDER,
  },
};

export default colors;
