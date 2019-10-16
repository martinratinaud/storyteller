import { modularScale } from 'polished';
import { css } from 'styled-components';

// import Badge from '../elements/Badge/Badge.theme';
// import Box from '../elements/Box/Box.theme';
// import Button from '../elements/Button/Button.theme';
// import Dl from 'elements/Dl/Dl.theme';
// import Heading from 'elements/Heading/Heading.theme';
// import Media from 'elements/Media/Media.theme';
// import Tabs from 'components/Tabs/Tabs.theme';
// import { PlayerTheme as Player } from 'components/Player/Player.style';
import { getScale, getFontScale } from './style-utils';
import { variables } from './variables';

const dimensions = {
  gap: 32,
  mobile: 320,
  tablet: 768,
  desktop: 960,
  widescreen: 1152,
  fullhd: 1344,
};

/*
  As the app's theme is splitted between this file and all the components's theme file,
  we use a common file to share variables between this theme file and components' theme files.
  So, this file should not directly contains color or size but only use common variables.
*/
const Theme = {
  colors: variables.colors,
  backgroundColors: variables.backgroundColors,
  borderColors: variables.borderColors,
  navigationPalette: variables.blueGreyPalette,
  embedPalette: variables.blueGreyPalette,
  blueGreyPalette: variables.blueGreyPalette,
  sizeScale: getScale(),
  heightScale: getScale(2),
  fontSizeScale: getFontScale('1em', 'minorThird'),
  breakpoint: (dimension = 'desktop') => (...args) => css`
    @media screen and (min-width: ${dimensions[dimension]}px) {
      ${css(...args)}
    }
  `,
  fontWeights: {
    extralight: 200,
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
  },
  dimensions,
  paddings: {
    none: 0,
    xxsmall: modularScale(-3, '1em', 'perfectFifth'),
    xsmall: modularScale(-2, '1em', 'perfectFifth'),
    small: modularScale(-1, '1em', 'perfectFifth'),
    medium: modularScale(0, '1em', 'perfectFifth'),
    large: modularScale(1, '1em', 'perfectFifth'),
    xlarge: modularScale(2, '1em', 'perfectFifth'),
    xxlarge: modularScale(3, '1em', 'perfectFifth'),
  },
  margins: {
    none: 0,
    xxsmall: modularScale(-3, '1em', 'perfectFifth'),
    xsmall: modularScale(-2, '1em', 'perfectFifth'),
    small: modularScale(-1, '1em', 'perfectFifth'),
    medium: modularScale(0, '1em', 'perfectFifth'),
    large: modularScale(1, '1em', 'perfectFifth'),
    xlarge: modularScale(2, '1em', 'perfectFifth'),
    xxlarge: modularScale(3, '1em', 'perfectFifth'),
  },
  grid: {
    gap: '0.75rem',
    gaps: {
      medium: '24px',
    },
  },
  font: {
    family: 'Raleway',
    sizes: {
      xlarge: 3,
      large: 2.5,
      medium: 2,
      small: 1.5,
      xsmall: 1.25,
      xxsmall: 1,
    },
  },
  progress: {
    sizes: {
      large: 1.5,
      medium: 1.25,
      small: 0.75,
    },
  },
  // Badge,
  // Box,
  // Button,
  // Dl,
  // Heading,
  // Media,
  // Player,
  // Tabs,
};

export default Theme;
