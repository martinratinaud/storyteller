# Common module

This modules aims at providing the basic UI framework to begin a project easily

## install

This modules needs some dependencies to be installed

```
yarn add styled-components polished shevyjs
yarn add -D @types/styled-components @types/polished  @types/shevyjs
```

As this modules is based on styled-components, you need to also include the base theme that you can customize as you wish

```
import mainTheme from 'modules/Common/theme/theme';

export default {
  ...mainTheme,
  <change what you like here>
};

```

And in order to make use of the theme you need to wrap your App in a ThemeProvider

```
import { ThemeProvider } from 'styled-components';

...

<ThemeProvider theme={mainTheme}>
  <App>
</ThemeProvider>
```

## Typography

In this module is also included typography as it is a great way to have fluid layouts. You can take advantage of this with

```
yarn add typography
yarn add -D @types/typography
```

and then if you want to use the one from this module in your app, do

```
yarn add typography-theme-moraga
```

and then use it in your app

```
import typography from 'modules/Common/theme/typography';
typography.injectStyles();
```

You can alternatively copy the typography file to your own module and use the typography theme you want
