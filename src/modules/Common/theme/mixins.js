import { css, keyframes } from 'styled-components';

export const media = {
  smallMobile: (...args) => css`
    ${({ theme }) => css`
      @media screen and (max-width: ${theme.dimensions.mobile}px) {
        ${css(...args)}
      }
    `}
  `,
  mobile: (...args) => css`
    ${({ theme }) => css`
      @media screen and (max-width: ${theme.dimensions.tablet - 1}px) {
        ${css(...args)}
      }
    `}
  `,
  touch: (...args) => css`
    ${({ theme }) => css`
      @media screen and (max-width: ${theme.dimensions.desktop - 1}px) {
        ${css(...args)}
      }
    `}
  `,
  tablet: (...args) => css`
    ${({ theme }) => css`
      @media screen and (min-width: ${theme.dimensions.tablet}px) {
        ${css(...args)}
      }
    `}
  `,
  tabletOnly: (...args) => css`
    ${({ theme }) => css`
      @media screen and (min-width: ${theme.dimensions.tablet}px) and (max-width: ${theme.dimensions.desktop - 1}px) {
        ${css(...args)}
      }
    `}
  `,
  desktop: (...args) => css`
    ${({ theme }) => css`
      @media screen and (min-width: ${theme.dimensions.desktop}px) {
        ${css(...args)}
      }
    `}
  `,
  desktopOnly: (...args) => css`
    ${({ theme }) => css`
      @media screen and (min-width: ${theme.dimensions.desktop}px) and (max-width: ${theme.dimensions.widescreen - 1}px) {
        ${css(...args)}
      }
    `}
  `,
  widescreen: (...args) => css`
    ${({ theme }) => css`
      @media screen and (min-width: ${theme.dimensions.widescreen}px) {
        ${css(...args)}
      }
    `}
  `,
  widescreenOnly: (...args) => css`
    ${({ theme }) => css`
      @media screen and (min-width: ${theme.dimensions.widescreen}px) and (max-width: ${theme.dimensions.fullhd - 1}px) {
        ${css(...args)}
      }
    `}
  `,
  fullhd: (...args) => css`
    ${({ theme }) => css`
      @media screen and (min-width: ${theme.dimensions.fullhd}px) {
        ${css(...args)}
      }
    `}
  `,
};

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export function center() {
  return css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3D(-50%, -50%, 0);
  `;
}

export function keepRatioAspect() {
  return css`
    &:before {
      content: '';
      display: block;
      padding-top: 100%;
      float: left;
    }

    &:after {
      content: '';
      display: block;
      clear: both;
    }
  `;
}

export function textColors() {
  return css`
    ${({ theme, color, customColor }) => css`
      ${Object.keys(theme.colors).map(
        colorKey => css`
          ${color &&
            color === colorKey &&
            css`
              color: ${theme.colors[colorKey]};
            `};
        `
      )}

      ${customColor &&
        customColor &&
        css`
          color: ${customColor};
        `}
    `}
  `;
}

export function fontWeights() {
  return css`
    ${({ theme }) => css`
      ${Object.keys(theme.fontWeights).map(
        weightsKey => css`
          ${({ fontWeight }) =>
            fontWeight === weightsKey &&
            css`
              font-weight: ${theme.fontWeights[weightsKey]};
            `}
        `
      )}
    `}
  `;
}

export function paddings() {
  return css`
    ${({ theme }) => css`
      ${Object.keys(theme.paddings).map(
        padding => css`
          ${props => css`
          ${props.padding === padding &&
            css`
              padding: ${theme.paddings[padding]};
            `}

          ${props.paddingHorizontal === padding &&
            css`
              padding-left: ${theme.paddings[padding]};
              padding-right: ${theme.paddings[padding]};
            `}

          ${props.paddingVertical === padding &&
            css`
              padding-top: ${theme.paddings[padding]};
              padding-bottom: ${theme.paddings[padding]};
            `}

          ${props.paddingTop === padding &&
            css`
              padding-top: ${theme.paddings[padding]};
            `}

          ${props.paddingBottom === padding &&
            css`
              padding-bottom: ${theme.paddings[padding]};
            `}

          ${props.paddingLeft === padding &&
            css`
              padding-left: ${theme.paddings[padding]};
            `}

          ${props.paddingRight === padding &&
            css`
              padding-right: ${theme.paddings[padding]};
            `}
        `}
        `
      )}
    `}
  `;
}

export function textAligns() {
  return css`
    ${({ textAlign }) => css`
      ${textAlign === 'center' && 'text-align: center'}
      ${textAlign === 'left' && 'text-align: left'}
      ${textAlign === 'right' && 'text-align: right'}
      ${textAlign === 'justify' && 'text-align: justify'}
    `}
  `;
}

export function margins() {
  return css`
    ${({ theme }) => css`
      ${Object.keys(theme.margins).map(
        margin => css`
          ${props => css`
          ${props.margin === margin &&
            css`
              margin: ${theme.margins[margin]};
            `}

          ${props.marginHorizontal === margin &&
            css`
              margin-left: ${theme.margins[margin]};
              margin-right: ${theme.margins[margin]};
            `}

          ${props.marginVertical === margin &&
            css`
              margin-top: ${theme.margins[margin]};
              margin-bottom: ${theme.margins[margin]};
            `}

          ${props.marginTop === margin &&
            css`
              margin-top: ${theme.margins[margin]};
            `}

          ${props.marginBottom === margin &&
            css`
              margin-bottom: ${theme.margins[margin]};
            `}

          ${props.marginLeft === margin &&
            css`
              margin-left: ${theme.margins[margin]};
            `}

          ${props.marginRight === margin &&
            css`
              margin-right: ${theme.margins[margin]};
            `}
        `}
        `
      )}
    `}
  `;
}

export function minHeight() {
  return css`
    ${({ theme }) => css`
      ${Object.keys(theme.heightScale).map(
        size => css`
          ${props => css`
            ${props.minHeight === size &&
              css`
                min-height: ${theme.heightScale[size]};
              `}
          `}
        `
      )}
    `}
  `;
}

export function loader() {
  return css`
    animation: ${rotate} 500ms infinite linear;
    border: 2px solid #aaa;
    border-radius: 10000px;
    border-right-color: transparent;
    border-top-color: transparent;
    content: '';
    display: block;
    height: 1em;
    position: relative;
    width: 1em;
  `;
}

export const placeholder = (...args) => css`
  &::-moz-placeholder {
    ${css(...args)}
  }
  &::-webkit-input-placeholder {
    ${css(...args)}
  }
  &:-moz-placeholder {
    ${css(...args)}
  }
  &:-ms-input-placeholder {
    ${css(...args)}
  }
`;

export function block() {
  return css`
    ${paddings}
    ${margins}
  `;
}

export function maxLine(lineHeight) {
  return css`
    ${props => css`
      ${props.maxLine &&
        css`
          overflow: hidden;
          position: relative;
          max-height: calc(${props.maxLine} * ${lineHeight}em);
          margin-right: -1em;
          padding-right: 1em;

          &:before {
            content: '...';
            position: absolute;
            right: 0.8em;
            padding: 0 0 0 0.2em;
            bottom: 0;
            background: white;
          }

          &:after {
            content: '';
            position: absolute;
            right: 0;
            width: 1em;
            height: 1em;
            margin-top: 0.2em;
          }
        `}
    `};
  `;
}

export function responsive() {
  return css`
    ${({ display, displayType = 'block' }) => css`
      display: none;

      ${display === 'smallMobile' && media.smallMobile` display: ${displayType}; `}
      ${display === 'mobile' && media.mobile` display: ${displayType}; `}
      ${display === 'tablet' && media.tablet` display: ${displayType}; `}
      ${display === 'tabletOnly' && media.tabletOnly` display: ${displayType}; `}
      ${display === 'touch' && media.touch` display: ${displayType}; `}
      ${display === 'desktop' && media.desktop` display: ${displayType}; `}
      ${display === 'desktopOnly' && media.desktopOnly` display: ${displayType}; `}
      ${display === 'widescreen' && media.widescreen` display: ${displayType}; `}
      ${display === 'widescreenOnly' && media.widescreenOnly` display: ${displayType}; `}
      ${display === 'fullhd' && media.fullhd` display: ${displayType}; `}
    `}
  `;
}
