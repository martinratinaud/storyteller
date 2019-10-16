import React, { createContext } from 'react';

import Flex, { IFlexProps } from '../../elements/Flex';

type TBreakpoint = 'mobile' | 'tablet' | 'desktop' | 'widescreen';

export type IGridProps = {
  children: any;
  breakpoint?: TBreakpoint;
  margin?: any;
} & IFlexProps;

export const Context = createContext<{ breakpoint?: TBreakpoint }>({});

export default ({ children, margin = 'none', breakpoint = 'tablet', ...rest }: IGridProps) => {
  return (
    <Flex
      direction={{ [breakpoint]: 'row', default: 'column' }}
      marginHorizontal={{ [breakpoint]: margin, default: 'none' }}
      marginVertical={{ [breakpoint]: 'none', default: margin }}
      {...rest}
    >
      <Context.Provider value={{ breakpoint }}>{children}</Context.Provider>
    </Flex>
  );
};
