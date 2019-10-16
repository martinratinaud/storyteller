import * as React from 'react';

import Flex, { IFlexProps as IFlexProps2 } from './Flex';
import FlexItem from './FlexItem';

const FlexWrapper = ({ children, ...props }: IFlexProps2) => <Flex {...props}>{children}</Flex>;

FlexWrapper.Item = FlexItem;

export type IFlexProps = IFlexProps2;

export default FlexWrapper;
