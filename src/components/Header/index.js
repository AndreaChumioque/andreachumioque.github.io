import React, { Fragment } from 'react';
// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { Hidden } from '@material-ui/core';

import HeaderDesktop from './HeaderDesktop';
import HeaderSmall from './HeaderSmall';

const pages = [
  {
    label: 'Portafolio',
    path: '/portfolio',
  },
  {
    label: 'Acerca de',
    path: '/about',
  },
  {
    label: 'Contáctame',
    path: '/contact'
  }
];

const Header = ({ siteTitle }) => (
  <Fragment>
    <Hidden smDown>
      <HeaderDesktop
        siteTitle={siteTitle}
        pages={pages}
      />
    </Hidden>
    <Hidden mdUp>
      <HeaderSmall
        siteTitle={siteTitle}
        pages={pages}
      />
    </Hidden>
  </Fragment>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header;
