import * as React from 'react';
import styled, { css } from 'styled-components';

interface ILayoutProps {
  children: any;
  backgroundImage?: string;
  backgroundColor?: string;
}

const Layout = styled('div')<ILayoutProps>`
  ${({ backgroundImage, backgroundColor }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: 100vh;

    ${backgroundColor &&
      css`
        background: ${backgroundColor};
      `}

    &:before {
      ${backgroundImage &&
        css`
          background: url(${backgroundImage}) no-repeat;
          opacity: 0.65;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: -1;
        `}
    }
  `}
`;

const Title = styled('h1')`
  background: linear-gradient(#444 5%, transparent);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 20px;
  z-index: 2;
`;

const Main = styled('div')`
  padding: 0;
  transition: transform 800ms;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const Footer = styled('a')`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 20px;
  z-index: 2;
  cursor: pointer;
  text-decoration: none;
  color: #333;
  font-size: 1.2em;
  font-weight: bold;

  &:hover {
    text-decoration: none;
    color: #000;
  }
`;

const LayoutWrapper = ({ children, backgroundImage, backgroundColor, ...props }: ILayoutProps) => (
  <Layout backgroundImage={backgroundImage} backgroundColor={backgroundColor} {...props}>
    {children}
  </Layout>
);

LayoutWrapper.Title = Title;
LayoutWrapper.Main = Main;
LayoutWrapper.Footer = Footer;

export default LayoutWrapper;
