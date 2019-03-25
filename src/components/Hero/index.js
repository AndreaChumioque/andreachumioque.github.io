import React, { Component } from 'react';
import classNames from 'classnames';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { Grid } from '@material-ui/core';

import styles from './hero.module.css';

class Hero extends Component {
  state = {
    message: [
      'Front-end Developer',
      'Diseñadora gráfica',
      'Creadora digital',
    ],
    currentMessage: 0,
  }

  componentDidMount() {
    this.changeMessage();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.currentMessage !== this.state.currentMessage) {
      this.changeMessage();
    }
  }

  changeMessage = () => {
    const { currentMessage } = this.state;
    const newMessage = currentMessage === 2 ? 0 : currentMessage + 1;
    setTimeout(() => {
      const element = document.getElementById('hero-message');
      if (element) {
        element.classList.add(styles.fade);
        setTimeout(() => {
          this.setState({ currentMessage: newMessage });
          element.classList.remove(styles.fade);
        }, 500);
      }
    }, 3000);
  }

  render() {
    const { message, currentMessage } = this.state;
    const { width } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query {
            illustration: file(relativePath: { eq: "home-illus.png" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <Grid
            component="section"
            className={classNames('container', styles.heroContainer)}
            container
            alignItems="center"
            alignContent="center"
          >
            <Grid item xs={12} md={7}>
              <h1 className={styles.name}>Andrea Chumioque</h1>
              <p id="hero-message" className={styles.message}>{message[currentMessage]}</p>
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={5}
              justify="flex-end"
              alignItems="center"
              className={classNames({
                [styles.verticalOffset]: isWidthUp('md', width)
              })}
            >
              <Img fluid={data.illustration.childImageSharp.fluid} className={styles.homeImage} />
            </Grid>
          </Grid>
        )}
      />
    );
  }
}

export default withWidth()(Hero);
