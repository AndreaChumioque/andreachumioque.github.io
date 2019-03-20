import React, { Component } from 'react';
import classNames from 'classnames';
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

  changeMessage = () => {
    const { currentMessage } = this.state;
    const newMessage = currentMessage === 2 ? 0 : currentMessage + 1;
    setTimeout(() => {
      document.getElementById('hero-message').classList.add(styles.fade);
      setTimeout(() => {
        this.setState({ currentMessage: newMessage });
        document.getElementById('hero-message').classList.remove(styles.fade);
      }, 500);
    }, 3000);
  }

  render() {
    const { message, currentMessage } = this.state;
    this.changeMessage();
    return (
      <Grid
        component="section"
        className={classNames('container', styles.heroContainer)}
        container
        direction="column"
        justify="center"
      >
        <h1 className={styles.name}>Andrea Chumioque</h1>
        <p id="hero-message" className={styles.message}>{message[currentMessage]}</p>
      </Grid>
    );
  }
}

export default Hero;
