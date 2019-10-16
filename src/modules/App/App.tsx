import React, { useState } from 'react';
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
  const increment = () => setCurrentIndex(currentIndex + 1);

  return (
    <Layout backgroundImage={backgroundImage} backgroundColor={backgroundColor}>
      {currentIndex < nbBubbles && <Layout.Title>{title}</Layout.Title>}
      <Layout.Main>
        {currentIndex < nbBubbles && <Story bubbles={bubbles} currentIndex={currentIndex} mainColor={mainColor} />}
        {currentIndex === nbBubbles && (
          <FinalCardContainer>
            <FinalCard>
              <FinalCard.Title>{finish.title}</FinalCard.Title>
              <FinalCard.Subtitle>{finish.subtitle}</FinalCard.Subtitle>
              <Grid>
                {finish.columns.map((column: any[]) => (
                  <Grid.Item flex="1" as={FinalCard.Ul}>
                    {column.map((line: any) => (
                      <FinalCard.Li>
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
      {currentIndex < nbBubbles && <Layout.Footer onClick={increment}>Click to go ahead</Layout.Footer>}
    </Layout>
  );
};

export default App;
