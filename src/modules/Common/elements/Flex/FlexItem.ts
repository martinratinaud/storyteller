import React from 'react';
import styled, { css } from 'styled-components';
import { paddings } from '../../theme/mixins';

import { formatAttribute } from './utils';

const FlexItem = styled(({ as = 'div', flex, grow, basis, shrink, order, alignSelf, textAlign, ...props }) => React.createElement(as, props))`
  ${({ flex, grow, basis, shrink, order, alignSelf, textAlign, onClick }) => css`
    ${formatAttribute('align-self', alignSelf)};
    ${formatAttribute('order', order)};
    ${formatAttribute('flex', flex)};
    ${formatAttribute('flex-shrink', shrink)};
    ${formatAttribute('flex-grow', grow)};
    ${formatAttribute('flex-basis', basis)};
    ${formatAttribute('text-align', textAlign)};
    ${paddings}
    ${onClick &&
      css`
        cursor: pointer;
      `}
  `}
`;

export default FlexItem;
