import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import Fade from '@material-ui/core/Fade';
import classNames from 'classnames';

import styles from './style';

const Layout = ({ classes, children, noBackground }) => (
  <Scrollbars
    autoHide
    autoHideTimeout={1000}
    autoHideDuration={200}
    renderView={(props) => <div {...props} className={classes.scrollFix} />}
    className={classes.container}>
    <header />
    <div
      className={classNames(
        classes.pageContainer,
        !noBackground && classes.background
      )}>
      <Fade in mountOnEnter unmountOnExit>
        <main className={classes.content}>{children}</main>
      </Fade>
    </div>
  </Scrollbars>
);

export default withStyles(styles)(Layout);
