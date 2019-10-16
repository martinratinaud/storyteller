import * as React from 'react';
import styled from 'styled-components';

interface IFinalCardProps {
  children: any;
}

const FinalCard = styled('div')<IFinalCardProps>`
  background: #ffffff5c;
  border: 1px solid #f7f7f7;
  padding: 20px;
  border-radius: 3px;
`;

const Title = styled('h1')`
  text-align: center;
  margin-bottom: 10px;
`;

const Subtitle = styled('h2')`
  text-align: center;
  margin-bottom: 10px;
`;

const Ul = styled('ul')`
  list-style-type: none;
  padding: 40px;
`;

const Li = styled('li')`
  margin-bottom: 10px;
`;

const FinalCardWrapper = ({ children, ...props }: IFinalCardProps) => <FinalCard {...props}>{children}</FinalCard>;

FinalCardWrapper.Title = Title;
FinalCardWrapper.Subtitle = Subtitle;
FinalCardWrapper.Ul = Ul;
FinalCardWrapper.Li = Li;

export default FinalCardWrapper;
