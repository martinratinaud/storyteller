import React from 'react';
import { ThemeProvider } from 'styled-components';

import 'modules/Common/styles/reset.css';
import typography from 'modules/Common/theme/typography';

import App from './App';
import mainTheme from './theme/theme';

import './styles/index.css';
typography.injectStyles();

export default () => (
  <ThemeProvider theme={mainTheme}>
    <App />
  </ThemeProvider>
);
