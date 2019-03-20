import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withWidth from '@material-ui/core/withWidth';
import { Grid } from '@material-ui/core';
import Menu from 'react-feather/dist/icons/menu';
import XCircle from 'react-feather/dist/icons/x-circle';
import posed, { PoseGroup } from 'react-pose';

import Logo from './logo';
import styles from './header.module.css';

const Overlay = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: { duration: 150 }
  },
  initialPose: 'exit',
});

class HeaderSmall extends Component {
  static propTypes = {
    width: PropTypes.string.isRequired,
    pages: PropTypes.array.isRequired,
  }
  
  static defaultProps = {
    siteTitle: '',
  }

  state = {
    open: false,
  }

  toggleMenu = () => {
    const { open } = this.state;
    const body = document.getElementsByTagName('body')[0];
    if (!open) {
      body.classList.add('noscroll');
    } else {
      body.classList.remove('noscroll');
    }
    this.setState({ open: !open });
  }

  render() {
    const { pages } = this.props;
    const { open } = this.state;

    return (
      <Grid
        component="header"
        item
        xs={12}
        md={3}
        className={classNames(styles.nav, styles.mobile, 'p25', 'flex', 'justify-space-between')}
      >
        <Link to="/" className={styles.logoContainer}>
          <Logo />
        </Link>
        <button onClick={() => this.toggleMenu()}>
          <Menu />
        </button>
        <PoseGroup>
          {open && (
            <Overlay key="overlay" className={styles.overlayContainer}>
              <Grid container item justify="flex-end">
                <button onClick={() => this.toggleMenu()}>
                  <XCircle size={30} />
                </button>
              </Grid>
              <Grid container item className={styles.overlayMenu} direction="column">
                {pages.map(({ label, path }) => (
                  <Link
                    key={`Nav${label}`}
                    to={path}
                    className={styles.navLink}
                  >
                    {label}
                  </Link>
                ))}
              </Grid>
            </Overlay>
          )}
        </PoseGroup>
      </Grid>
    );
  }
}

export default withWidth()(HeaderSmall);
