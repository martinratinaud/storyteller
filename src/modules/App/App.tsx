import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import '../../modules/Common/styles/reset.css';
import './styles/index.css';

import data from './stories/default.json';
const {
  theme: { backgroundImage, backgroundColor, mainColor },
  story,
  finish,
} = data;
const { title, bubbles } = story;
const nbBubbles = bubbles.length;

const Layout = styled('div')<{ backgroundImage?: string; backgroundColor?: string }>`
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
`;

const Title = styled('h1')`
  background: linear-gradient(#000 10%, transparent);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 20px;
  z-index: 2;
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
`;

const Wrapper = styled('div')`
  padding: 0;
  transition: transform 800ms;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const Story = styled('div')<{ nbItemsDisplayed: number }>`
  ${({ nbItemsDisplayed }) => css`
    transform: translateY(-${nbItemsDisplayed * 130}px);
    padding: 5px;
    margin: 100px auto 0;
    transition: transform 800ms;
    max-width: 500px;
  `}
`;

const Bubble = styled(`div`)<{ type: 'from' | 'to'; mainColor: string }>`
  ${({ type, mainColor }) => css`
    position: relative;
    padding: 15px 30px;
    border-radius: 25px;
    max-width: 350px;
    font-family: Arial;
    letter-spacing: 0.02em;
    /* https://css-tricks.com/snippets/css/fluid-typography/ */
    font-size: calc(24px + (30 - 24) * ((100vw - 300px) / (1600 - 300)));
    line-height: 1.2;
    font-weight: normal;
    margin-bottom: 5px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    hyphens: auto;
    white-space: pre-wrap;

    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      bottom: 5px;
      border: 20px solid transparent;
      border-bottom: 0;
    }

    &::after {
      font-size: 12.5px;
      color: #aaa;
      position: absolute;
      bottom: -22px;
      letter-spacing: 0.05em;
    }

    ${type === 'from' &&
      css`
        color: #333;
        background: #fff;
        text-align: left;
        float: left;

        &::before {
          left: -5px;
          border-right-color: #fff;
          border-left: 0;
        }
      `}
    ${type === 'to' &&
      css`
        text-align: right;
        color: #fff;
        background: ${mainColor};
        float: right;

        &::before {
          right: -5px;
          border-left-color: ${mainColor};
          border-right: 0;
        }
      `}
  `}
`;

const Spacer = styled('div')<{ type: 'from' | 'to' }>`
  ${({ type }) => css`
    clear: both;
    font-style: italic;
    height: 40px;
    ${type === 'from' &&
      css`
        text-align: left;
        margin-left: 12px;
      `}
    ${type === 'to' &&
      css`
        text-align: right;
        margin-right: 12px;
      `}
  `}
`;

const App = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  return (
    <Layout backgroundImage={backgroundImage} backgroundColor={backgroundColor}>
      <Title>{title}</Title>
      <Wrapper>
        <Story nbItemsDisplayed={counter}>
          {bubbles
            .filter((bubble: any, i: number) => i <= counter)
            .map((bubble: any, i: number) => (
              <>
                <Bubble key={`bubble_${i}`} type={bubble.type} mainColor={mainColor}>
                  {bubble.message}
                </Bubble>
                <Spacer type={bubble.type}>{bubble.name}</Spacer>
              </>
            ))}
        </Story>
        {counter === nbBubbles && <div>{finish.title}</div>}
      </Wrapper>
      {counter < nbBubbles && <Footer onClick={increment}>Click to go ahead</Footer>}
    </Layout>
  );
};

export default App;
