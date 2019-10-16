import { css } from 'styled-components';
import { media } from '../../theme/mixins';

export const getResponsiveCss = (cssPropertyName: string, attribute: any, fromObject: any) => {
  let attrCss = css``;

  Object.keys(attribute).forEach((breakpoint: string) => {
    const valueFromObject = fromObject && fromObject[attribute[breakpoint]];
    const value = valueFromObject !== undefined ? valueFromObject : attribute[breakpoint];
    // @ts-ignore
    const mediaQuery: any = media[breakpoint];
    attrCss = css`
      ${attrCss};
      ${breakpoint === 'default' &&
        css`
          ${cssPropertyName}: ${value};
        `}
      ${breakpoint !== 'default' &&
        mediaQuery`
        ${cssPropertyName}: ${value};
      `}
    `;
  });

  return attrCss;
};

export const formatAttribute = (cssPropertyName: string, attribute: any, fromObject?: any) => {
  if (!attribute) {
    return null;
  }

  if (typeof attribute !== 'object') {
    return getResponsiveCss(cssPropertyName, { default: attribute }, fromObject);
  }

  return getResponsiveCss(cssPropertyName, attribute, fromObject);
};

export const writeResponsiveCss = (attribute: any, data: any, condition: any = () => true) => {
  let attrCss = css``;

  if (!attribute) {
    return null;
  }

  if (typeof attribute !== 'object') {
    if (condition && !condition({ value: attribute })) {
      return null;
    }
    return data;
  }

  Object.keys(attribute).forEach((breakpoint: string) => {
    const value = attribute[breakpoint];
    if (condition && !condition({ breakpoint, value })) {
      return;
    }
    // @ts-ignore
    const mediaQuery: any = media[breakpoint];

    attrCss = css`
      ${attrCss};
      ${breakpoint === 'default' && condition({ breakpoint, value }) && data}
      ${breakpoint !== 'default' &&
        condition({ breakpoint, value }) &&
        mediaQuery`
        ${data};
      `}
    `;
  });

  return attrCss;
};

export const formatMargin = (type: string, attribute: any) => {
  let attrCss = css`
    ${({ theme }) => css``}
  `;

  if (type === 'horizontal' || type === 'marginLeft') {
    attrCss = css`
      ${attrCss}
      ${({ theme }: { theme: any }) => css`
        ${formatAttribute('margin-left', attribute, theme.margins)}
      `}
    `;
  }
  if (type === 'horizontal' || type === 'marginRight') {
    attrCss = css`
      ${attrCss}
      ${({ theme }: { theme: any }) => css`
        ${formatAttribute('margin-right', attribute, theme.margins)}
      `}
    `;
  }
  if (type === 'vertical' || type === 'marginTop') {
    attrCss = css`
      ${attrCss}
      ${({ theme }: { theme: any }) => css`
        ${formatAttribute('margin-top', attribute, theme.margins)}
      `}
    `;
  }
  if (type === 'vertical' || type === 'marginBottom') {
    attrCss = css`
      ${attrCss}
      ${({ theme }: { theme: any }) => css`
        ${formatAttribute('margin-bottom', attribute, theme.margins)}
      `}
    `;
  }
  return attrCss;
};
