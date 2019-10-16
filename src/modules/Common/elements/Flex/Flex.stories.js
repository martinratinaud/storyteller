import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';

import Flex from './Flex';

storiesOf('Elements/Flex', module)
  .add('Basic', withInfo()(() => (
    <Flex alignItems="center" justifyContent="center">
      <Flex.Item>the center of the Earth</Flex.Item>
    </Flex>
  )))
  .add('Columns', withInfo()(() => (
    <Flex direction="column" justifyContent="flex-end" style={{ height: '200px' }}>
      <Flex.Item grow={1} style={{ backgroundColor: '#D1236D' }}>Grow 1</Flex.Item>
      <Flex.Item style={{ backgroundColor: '#1A91EB' }}>Default</Flex.Item>
    </Flex>
  )))
  .add('Row', withInfo()(() => (
    <Flex direction="row">
      <Flex.Item grow={1} style={{ backgroundColor: '#D1236D' }}>Grow 1</Flex.Item>
      <Flex.Item style={{ backgroundColor: '#1A91EB' }}>Default</Flex.Item>
    </Flex>
  )))
  .add('Row gutter', withInfo()(() => (
    <Flex direction="row" marginHorizontal="small">
      <Flex.Item
        style={{ backgroundColor: '#D1236D' }}
        grow={4}
        basis="200px"
      >
        Flex1
      </Flex.Item>
      <Flex.Item
        style={{ backgroundColor: '#1A91EB' }}
        grow={7}
        basis="500px"
      >
        Flex2
      </Flex.Item>
    </Flex>
  )))
  .add('wrap', withInfo()(() => (
    <React.Fragment>
      <div>Resize your page if needed to see break</div>
      <h3>No Wrap</h3>
      <Flex direction="row" marginHorizontal="small" >
        <Flex.Item>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Flex.Item>
        <Flex.Item>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</Flex.Item>
        <Flex.Item>cccccccccccccccccccccccccccccccccccc</Flex.Item>
      </Flex>
      <br />
      <h3>Wrap</h3>
      <Flex direction="row" marginHorizontal="small" wrap="wrap">
        <Flex.Item>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Flex.Item>
        <Flex.Item>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</Flex.Item>
        <Flex.Item>cccccccccccccccccccccccccccccccccccc</Flex.Item>
      </Flex>
      <h3>Wrap reverse</h3>
      <Flex direction="row" marginHorizontal="small" wrap="wrap-reverse">
        <Flex.Item>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Flex.Item>
        <Flex.Item>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</Flex.Item>
        <Flex.Item>cccccccccccccccccccccccccccccccccccc</Flex.Item>
      </Flex>
    </React.Fragment>
  )))
  .add('Row responsive to Column', withInfo()(() => (
    <Flex direction={{ tablet: 'row', default: 'column' }} marginHorizontal={{ tablet: 'small', default: 'none' }} marginVertical={{ tablet: 'none', default: 'xsmall' }}>
      <Flex.Item
        style={{ backgroundColor: '#D1236D' }}
        grow={4}
        basis="200px"
      >
        Flex1
      </Flex.Item>
      <Flex.Item
        style={{ backgroundColor: '#1A91EB' }}
        grow={7}
        basis="500px"
      >
        Flex2
      </Flex.Item>
      <Flex.Item
        style={{ backgroundColor: '#DEFEA4' }}
        grow={7}
        basis="500px"
      >
        Flex3
      </Flex.Item>
    </Flex>
  )))
  .add('Row responsive to Column with first and last margins', withInfo()(() => (
    <Flex
      direction={{ tablet: 'row', default: 'column' }}
      marginHorizontal={{ tablet: 'small', default: 'none' }}
      marginVertical={{ tablet: 'none', default: 'xsmall' }}
      keepFirstMargin
      keepLastMargin
    >
      <Flex.Item
        style={{ backgroundColor: '#D1236D' }}
        grow={4}
        basis="200px"
      >
        Flex1
      </Flex.Item>
      <Flex.Item
        style={{ backgroundColor: '#1A91EB' }}
        grow={7}
        basis="500px"
      >
        Flex2
      </Flex.Item>
      <Flex.Item
        style={{ backgroundColor: '#DEFEA4' }}
        grow={7}
        basis="500px"
      >
        Flex3
      </Flex.Item>
    </Flex>
  )));
