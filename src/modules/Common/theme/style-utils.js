import { parseToRgb, toColorString, mix, modularScale, getLuminance, transparentize, invert, lighten } from 'polished';
import Shevy from 'shevyjs';

export const shevy = new Shevy({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  baseFontScale: [2.488, 2.074, 1.728, 1.44, 1.2, 1],
  addMarginBottom: true,
  proximity: false,
  proximityFactor: 0.85,
});

export const getInvertColor = color => (
  getLuminance(color) > 0.55 ? '#363636' : '#FFF'
);

export const getShadowTransparency = (transparency, color) => {
  const newColor = getLuminance(color) > 0.55 ? lighten(0.5, invert(color)) : color;
  return transparentize(transparency, newColor);
};

export function getResponsiveValue(dimensions, responsiveValue, actualWidth) {
  /* For SSR */
  if (!actualWidth) {
    return responsiveValue.default;
  }

  if (responsiveValue.smallMobile && actualWidth <= dimensions.mobile) {
    return responsiveValue.smallMobile;
  }

  if (responsiveValue.mobile && actualWidth < dimensions.tablet) {
    return responsiveValue.mobile;
  }

  if (responsiveValue.tablet && actualWidth >= dimensions.tablet && actualWidth <= dimensions.desktop) {
    return responsiveValue.tablet;
  }

  if (responsiveValue.desktop && actualWidth >= dimensions.desktop && actualWidth <= dimensions.widescreen) {
    return responsiveValue.desktop;
  }

  if (responsiveValue.widescreen && actualWidth >= dimensions.widescreen && actualWidth <= dimensions.fullhd) {
    return responsiveValue.widescreen;
  }

  if (responsiveValue.fullhd && actualWidth > dimensions.fullhd) {
    return responsiveValue.fullhd;
  }

  return responsiveValue.default;
}

function multiply(color1, color2) {
  const rgb1 = parseToRgb(color1);
  const rgb2 = parseToRgb(color2);
  rgb1.blue = Math.floor((rgb1.blue * rgb2.blue) / 255);
  rgb1.green = Math.floor((rgb1.green * rgb2.green) / 255);
  rgb1.red = Math.floor((rgb1.red * rgb2.red) / 255);
  return toColorString(rgb1);
}

export function getPalette(color) {
  const baseLight = '#ffffff';
  const baseDark = multiply(color, color);
  return {
    tone50: mix(0.12, color, baseLight),
    tone100: mix(0.30, color, baseLight),
    tone200: mix(0.50, color, baseLight),
    tone300: mix(0.70, color, baseLight),
    tone400: mix(0.85, color, baseLight),
    tone500: mix(1, color, baseLight),
    tone600: mix(0.87, color, baseDark),
    tone700: mix(0.70, color, baseDark),
    tone800: mix(0.54, color, baseDark),
    tone900: mix(0.25, color, baseDark),
  };
}

export function getScale(base = 0) {
  /* You can see all scale available here: http://www.modularscale.com
     You can choose a specific scale like this: modularScale(steps, 'perfectFifth') */
  return {
    xxsmall: modularScale(-5 + base),
    xsmall: modularScale(-4 + base),
    small: modularScale(-3 + base),
    medium_xsmall: modularScale(-2 + base),
    medium_small: modularScale(-1 + base),
    medium: modularScale(0 + base),
    medium_large: modularScale(1 + base),
    medium_xlarge: modularScale(2 + base),
    large: modularScale(3 + base),
    xlarge: modularScale(4 + base),
    xxlarge: modularScale(5 + base),
  };
}

export function getFontScale(base = '1em', scale = 'minorThird') {
  /* You can see all scale available here: http://www.modularscale.com
     You can choose a specific scale like this: modularScale(steps, 'perfectFifth') */
  return {
    xxsmall: modularScale(-3, base, scale),
    xsmall: modularScale(-2, base, scale),
    small: modularScale(-1, base, scale),
    medium_xsmall: modularScale(0, base, scale),
    medium_small: modularScale(1, base, scale),
    medium: modularScale(2, base, scale),
    medium_large: modularScale(3, base, scale),
    medium_xlarge: modularScale(4, base, scale),
    large: modularScale(5, base, scale),
    xlarge: modularScale(6, base, scale),
    xxlarge: modularScale(7, base, scale),
  };
}
