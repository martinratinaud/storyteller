import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/fp/get';

interface IStoryProps {
  bubbles: any[];
  currentIndex: number;
  mainColor?: string;
}

const Story = styled('div')<{ offsetHeight: number }>`
  ${({ offsetHeight }) => css`
    transform: translateY(-${offsetHeight}px);
    padding: 10px;
    margin: 60vh auto 0;
    transition: transform 800ms;
    max-width: 600px;
  `}
`;

const Bubble = styled(`div`)<{ type: 'from' | 'to'; mainColor?: string }>`
  ${({ type, mainColor, theme }) => css`
    position: relative;
    padding: 15px 30px;
    border-radius: 25px;
    max-width: 60%;
    font-family: Arial;
    letter-spacing: 0.02em;
    /* https://css-tricks.com/snippets/css/fluid-typography/ */
    font-size: calc(18px + (30 - 18) * ((100vw - 300px) / (1600 - 300)));
    line-height: 1.2;
    font-weight: normal;
    margin-bottom: 5px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    hyphens: auto;
    white-space: pre-wrap;
    text-align: left;

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
        float: left;

        &::before {
          left: -5px;
          border-right-color: #fff;
          border-left: 0;
        }
      `}
    ${type === 'to' &&
      css`
        color: #fff;
        background: ${mainColor || theme.colors.main};
        float: right;

        &::before {
          right: -5px;
          border-left-color: ${mainColor || theme.colors.main};
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

const StoryWrapper = ({ bubbles, currentIndex, mainColor, ...props }: IStoryProps) => {
  const story = useRef(null);

  return (
    <Story ref={story} offsetHeight={get('current.offsetHeight')(story) || 0} {...props}>
      {bubbles
        .filter((_, i: number) => i <= currentIndex)
        .map((bubble: any, i: number) => (
          <React.Fragment key={`bubble_${i}`}>
            <Bubble type={bubble.type} mainColor={mainColor}>
              {bubble.message}
            </Bubble>
            <Spacer type={bubble.type}>{bubble.name}</Spacer>
          </React.Fragment>
        ))}
    </Story>
  );
};

StoryWrapper.Bubble = Bubble;
StoryWrapper.Spacer = Spacer;

export default StoryWrapper;
