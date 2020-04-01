import muiTheme from './mui.theme';

const theme = {
  ...muiTheme,
  app: {
    maxWidth: muiTheme.typography.pxToRem(960),
  },
};

export default theme;
