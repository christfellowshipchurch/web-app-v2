const COLORS = {
  Battleship: '#828282',
  Picton: '#00aeef',
  Tuatara: '#353535',
  'White Smoke': '#f6f6f6',
};

const colors = {
  // LIGHT THEME
  light: {
    primary: COLORS['Picton'],
    secondary: COLORS['Tuatara'],
    tertiary: COLORS['Battleship'],

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

    alert: '#fe5f55',
    warning: '#ffc527',
    success: '#8acb88',
    wordOfChrist: COLORS['Tuatara'],

    screen: COLORS['White Smoke'],
    paper: '#fff',

    black: '#000',
    white: '#fff',

    // LEGACY!
    bg: COLORS['White Smoke'],
    fg: COLORS['Tuatara'],
    subdued: COLORS['Battleship'],
    border: '#cbcbcb',
  },

  // DARK THEME
  dark: {
    primary: COLORS['Picton'],
    secondary: COLORS['White Smoke'],
    tertiary: COLORS['Battleship'],

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

    alert: '#fe5f55',
    warning: '#ffc527',
    success: '#8acb88',
    wordOfChrist: COLORS['Tuatara'],

    screen: COLORS['Tuatara'],
    paper: COLORS['Battleship'],

    black: '#000',
    white: '#fff',
  },
};

export default colors;
