import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Grid, Hidden } from '@material-ui/core';

import Header from './Header';
import './layout.css';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  componentDidMount() {
    const body = document.getElementsByTagName('body')[0];
    if (body) {
      body.classList.remove('noscroll');
    }
  }

  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <Grid container>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Hidden smDown>
              <Grid item md={3} />
            </Hidden>
            <Grid item xs={12} md={9} component="main">
              {children}
            </Grid>
          </Grid>
        )}
      />
    );
  }
}
// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <Grid container>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <Hidden smDown>
//           <Grid item md={3} />
//         </Hidden>
//         <Grid item xs={12} md={9} component="main">
//           {children}
//         </Grid>
//       </Grid>
//     )}
//   />
// );

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout;
