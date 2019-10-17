import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';

import { Story } from 'modules/Story';
import 'modules/Common/styles/reset.css';
import { Grid } from 'ui';

import data from './stories/standard.json';
import '@fortawesome/fontawesome-free/css/all.css';

import Layout from './containers/Layout';
import FinalCard from './components/FinalCard';

const {
  theme: { backgroundImage, backgroundColor, mainColor },
  story,
  finish,
} = data;
const { title, bubbles } = story;
const nbBubbles = bubbles.length;

const FinalCardContainer = styled('div')`
  ${({ theme }) => css`
    display: block;
    overflow-y: auto;
    height: 100vh;

    ${theme.breakpoint('tablet')`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
  `}
`;

const SkipButton = styled('a')`
  position: fixed;
  width: 56px;
  height: 56px;
  right: 15px;
  bottom: 30px;
  cursor: pointer;
  border-radius: 50%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  text-decoration: none;
  text-align: center;
  background: #333;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  z-index: 2;
  transition: all 150ms;

  &:hover {
    color: white;
    text-decoration: none;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.34), 0 3px 1px -2px rgba(0, 0, 0, 0.32), 0 1px 5px 0 rgba(0, 0, 0, 0.5);
  }
`;

const Link = styled('a')`
  color: ${mainColor};
  display: flex;
  align-items: center;
  transition: all 200ms ease-out;

  > i {
    margin-right: 5px;
  }

  &:hover {
    padding-left: 10px;
    color: ${mainColor};
    text-decoration: none;
  }
`;

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const increment: () => void = useCallback(() => setCurrentIndex(currentIndex + 1), [currentIndex]);
  const skip = () => setCurrentIndex(nbBubbles);
  const isStoryFinished = currentIndex >= nbBubbles;

  const onSpacePress = useCallback(
    event => {
      const { keyCode } = event;

      if (keyCode === 32) {
        increment();
      }
    },
    [increment]
  );

  useEffect(() => {
    window.addEventListener('keydown', onSpacePress);
    return () => {
      window.removeEventListener('keydown', onSpacePress);
    };
  }, [onSpacePress]);

  useEffect(() => {
    // @ts-ignore
    if (isStoryFinished && window.fcWidget) {
      // @ts-ignore
      window.fcWidget.init({
        token: '98d3abf1-4024-4a14-861d-c3144add87f7',
        host: 'https://wchat.freshchat.com',
        config: {
          agent: {
            hideName: false,
            hideBio: false,
            hidePic: false,
          },
        },
      });
    }
  }, [isStoryFinished]);

  return (
    <Layout backgroundImage={backgroundImage} backgroundColor={backgroundColor}>
      {!isStoryFinished && <Layout.Title>{title}</Layout.Title>}
      <Layout.Main>
        {!isStoryFinished && <Story bubbles={bubbles} currentIndex={currentIndex} mainColor={mainColor} />}
        {isStoryFinished && (
          <FinalCardContainer>
            <FinalCard>
              <FinalCard.Title>{finish.title}</FinalCard.Title>
              <FinalCard.Subtitle>{finish.subtitle}</FinalCard.Subtitle>
              <Grid>
                {finish.columns.map((column: any[]) => (
                  <Grid.Item flex="1" as={FinalCard.Ul}>
                    {column.map((line: any) => (
                      <FinalCard.Li key={`li_${line.name}`}>
                        <Link href={line.link} target="_blank" rel="noopener noreferrer">
                          {line.icon && <i className={line.icon} />}
                          {line.name}
                        </Link>
                      </FinalCard.Li>
                    ))}
                  </Grid.Item>
                ))}
              </Grid>
            </FinalCard>
          </FinalCardContainer>
        )}
      </Layout.Main>
      {!isStoryFinished && <Layout.Footer onClick={increment}>Click here or hit SPACE to go ahead</Layout.Footer>}
      {!isStoryFinished && (
        <SkipButton onClick={skip} title="hire me now and skip the story!">
          <i className="fas fa-forward" />
        </SkipButton>
      )}
    </Layout>
  );
};

export default App;
