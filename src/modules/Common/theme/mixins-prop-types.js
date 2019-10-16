import PropTypes from 'prop-types';

import theme from './theme';

// const colorsKeys = Object.keys(theme.colors);
const themeMarginKeys = Object.keys(theme.margins);
const themePaddingKeys = Object.keys(theme.paddings);
const themeFontWeightsKeys = Object.keys(theme.fontWeights);

const margins = {
  margin: PropTypes.oneOf(themeMarginKeys),
  marginHorizontal: PropTypes.oneOf(themeMarginKeys),
  marginVertical: PropTypes.oneOf(themeMarginKeys),
  marginTop: PropTypes.oneOf(themeMarginKeys),
  marginBottom: PropTypes.oneOf(themeMarginKeys),
  marginLeft: PropTypes.oneOf(themeMarginKeys),
  marginRight: PropTypes.oneOf(themeMarginKeys),
};

const colors = {
  // color: PropTypes.oneOf(colorsKeys), // this does not work with custom theme colors provided in the project using artistco-ui
  color: PropTypes.string,
  customColor: PropTypes.string,
};

const paddings = {
  padding: PropTypes.oneOf(themePaddingKeys),
  paddingHorizontal: PropTypes.oneOf(themePaddingKeys),
  paddingVertical: PropTypes.oneOf(themePaddingKeys),
  paddingTop: PropTypes.oneOf(themePaddingKeys),
  paddingBottom: PropTypes.oneOf(themePaddingKeys),
  paddingLeft: PropTypes.oneOf(themePaddingKeys),
  paddingRight: PropTypes.oneOf(themePaddingKeys),
};

const fontWeights = {
  fontWeight: PropTypes.oneOf(themeFontWeightsKeys),
};

const textAlign = {
  textAlign: PropTypes.oneOf(['center', 'left', 'right', 'justify']),
};

const block = {
  ...margins,
  ...paddings,
};

const responsive = {
};

export default {
  colors,
  margins,
  paddings,
  fontWeights,
  textAlign,
  block,
  responsive,
};
