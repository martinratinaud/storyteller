import React from 'react';
import styled, { css } from 'styled-components';
import { paddings } from '../../theme/mixins';

import { formatAttribute, writeResponsiveCss, formatMargin } from './utils';

interface ResponsiveProps {
  smallMobile?: string;
  mobile?: string;
  tablet?: string;
  desktop?: string;
  widescreen?: string;
  fullhd?: string;
  default: string;
}

export interface IFlexProps {
  children: any;
  as?: any;
  alignItems?: string | ResponsiveProps;
  direction?: string | ResponsiveProps;
  textAlign?: string | ResponsiveProps;
  justifySelf?: string | ResponsiveProps;
  justifyContent?: string | ResponsiveProps;
  keepFirstMargin?: boolean;
  keepLastMargin?: boolean;
  marginHorizontal?: string | ResponsiveProps;
  marginVertical?: string | ResponsiveProps;
  paddingHorizontal?: string | ResponsiveProps;
  paddingVertical?: string | ResponsiveProps;
  wrap?: string | ResponsiveProps;
  fullWidth?: boolean;
  style?: any;
}

const Flex = styled<any>(
  ({
    as = 'div',
    alignItems,
    justifyContent,
    justifySelf,
    direction,
    marginHorizontal,
    marginVertical,
    paddingHorizontal,
    paddingVertical,
    keepFirstMargin,
    keepLastMargin,
    textAlign,
    fullWidth,
    wrap,
    ...props
  }: IFlexProps) => React.createElement(as, props)
)`
  display: flex;
  ${({
    alignItems,
    justifyContent,
    justifySelf,
    direction,
    marginHorizontal,
    marginVertical,
    keepFirstMargin,
    keepLastMargin,
    wrap,
    fullWidth,
  }) => css`

    ${formatAttribute('flex-direction', direction)};
    ${formatAttribute('align-items', alignItems)};
    ${formatAttribute('justify-content', justifyContent)};
    ${formatAttribute('justify-self', justifySelf)};
    ${formatAttribute('flex-wrap', wrap)};

    /* As justifySelf does not always work, use this trick */
    ${justifySelf &&
      justifySelf === 'flex-end' &&
      direction === 'row' &&
      css`
        margin-left: auto;
      `}
    ${justifySelf &&
      justifySelf === 'flex-start' &&
      direction === 'row' &&
      css`
        margin-right: auto;
      `}

    ${paddings}

    ${fullWidth &&
      css`
        width: 100%;
      `}

    /* Make margin bottom and top 0 on first and last child*/
    ${direction &&
      !keepFirstMargin &&
      writeResponsiveCss(
        direction,
        css`
          > *:first-child {
            margin-top: 0;
          }
        `,
        ({ value }: any) => value === 'column'
      )}
    ${direction &&
      !keepLastMargin &&
      writeResponsiveCss(
        direction,
        css`
          > *:last-child {
            margin-bottom: 0;
          }
        `,
        ({ value }: any) => value === 'column'
      )}

    /* Make margin left and right 0 on first and last child*/
    ${direction &&
      !keepFirstMargin &&
      writeResponsiveCss(
        direction,
        css`
          > *:first-child {
            margin-left: 0;
          }
        `,
        ({ value }: any) => value === 'row'
      )}
    ${direction &&
      !keepLastMargin &&
      writeResponsiveCss(
        direction,
        css`
          > *:last-child {
            margin-right: 0;
          }
        `,
        ({ value }: any) => value === 'row'
      )}

    > * {
      ${formatMargin('horizontal', marginHorizontal)};
      ${formatMargin('vertical', marginVertical)};
    }
  `}
`;

export default Flex;
