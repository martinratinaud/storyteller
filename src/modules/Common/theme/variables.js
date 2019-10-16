import { getPalette } from './style-utils';

export const variables = {
  backgroundColors: {
    dark: '#2B303A',
    grey: '#cccccc',
    light: '#fafafa',
  },
  colors: {
    dark: '#3e4b4c',
    white: '#ffffff',
    light: '#fafafa',
    grey: '#cccccc',
    main: '#90cfca',
    mainLight: '#2EA2D3',
    mainDark: '#185570',
    accent: '#911B50',
    accentLight: '#CE2772',
    accentDark: '#5E1134',
    faded: '#A79EAC',
    positive: '#1B915C',
    negative: '#EF2D56',
    warning: '#ffc107',

    // social Colors
    facebook: '#3b5999',
    google: '#dd4b39',
    twitter: '#55acee',
    wechat: '#09b83e',
    weixin: '#09b83e',
    youtube: '#cc181e',
    linkedin: '#007bb5',
    line: '#00b833',
    qzone: '#fffc00',
    whatsapp: '#25d366',
    weibo: '#df2029',
  },
  borderColors: {
    dark: '#262841',
    grey: '#cccccc',
    greyLighter: '#e0e1e2',
    light: '#fafafa',
  },
  blueGreyPalette: getPalette('#262841'),
};

// Colors
export const baseColors = {
  black: '#0a0a0a',
  blackBis: '#121212',
  blackTer: '#242424',
  greyDarker: '#363636',
  greyDark: '#4a4a4a',
  grey: '#7a7a7a',
  greyLight: '#b5b5b5',
  greyLighter: '#e0e1e2',
  whiteTer: '#f5f5f5',
  whiteBis: '#fafafa',
  white: '#ffffff',
};

export const derivedColors = {
  main: '#ff7900',
  mainLight: '#ffaa42',
  mainDark: '#c54a00',
  accent: '#49168c',
  accentLight: '#990099',
  accentDark: '#11005e',
  blueGrey: '#262841',
};

export const colors = {
  dark: baseColors.greyDarker,
  light: baseColors.whiteBis,
  main: derivedColors.main,
  mainLight: derivedColors.mainLight,
  mainDark: derivedColors.mainDark,
  accent: derivedColors.accent,
  accentLight: derivedColors.accentLight,
  accentDark: derivedColors.accentDark,
  positive: '#21ba45',
  negative: '#db2828',
  warning: '#ffc107',
};

export const socialColors = {
  facebook: '#3b5999',
  google: '#ea4335',
  twitter: '#55acee',
  wechat: '#09b83e',
  youtube: '#cc181e',
  linkedin: '#007bb5',
  qzone: '#fffc00',
};

// Typography
export const weights = {
  light: 300,
  normal: 400,
  semibold: 600,
  bold: 700,
};

// Typography
export const size1 = 3; // rem
export const size2 = 2.5; // rem
export const size3 = 2; // rem
export const size4 = 1.5; // rem
export const size5 = 1.25; // rem
export const size6 = 1; // rem
export const size7 = 0.75; // rem

export const sizes = {
  small: size7,
  normal: size6,
  medium: size5,
  large: size4,
};
