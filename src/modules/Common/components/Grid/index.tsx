import * as React from 'react';

import Grid, { IGridProps } from './Grid';
import GridItem from './GridItem';

const GridWrapper = ({ children, ...props }: IGridProps) => <Grid {...props}>{children}</Grid>;

GridWrapper.Item = GridItem;

export default GridWrapper;
