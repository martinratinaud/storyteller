import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import Flex from '../../elements/Flex';
import { Context } from './Grid';

const FlexItemStyled = styled(Flex.Item)`
  ${({ theme, breakpoint }) => css`
    width: 100%;
    ${theme.breakpoint(breakpoint)`
      width: auto;
    `}
  `}
`;

export default ({ children, ...rest }: any) => {
  const breakpoint = useContext(Context);
  return (
    <FlexItemStyled breakpoint={breakpoint} {...rest}>
      {children}
    </FlexItemStyled>
  );
};
