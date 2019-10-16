import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';

import { Story } from 'modules/Story';
import 'modules/Common/styles/reset.css';
import { Grid } from 'ui';

import data from './stories/standard.json';

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

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const increment: () => void = useCallback(() => setCurrentIndex(currentIndex + 1), [currentIndex]);
  const isStoryFinished = currentIndex === nbBubbles;

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
    if (isStoryFinished) {
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
                        <a href={line.link} target="_blank" rel="noopener noreferrer">
                          {line.name}
                        </a>
                      </FinalCard.Li>
                    ))}
                  </Grid.Item>
                ))}
              </Grid>
            </FinalCard>
          </FinalCardContainer>
        )}
      </Layout.Main>
      {!isStoryFinished && <Layout.Footer onClick={increment}>Click or hit SPACE to go ahead</Layout.Footer>}
    </Layout>
  );
};

export default App;
