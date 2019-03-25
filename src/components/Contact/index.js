import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Grid } from '@material-ui/core';
import Mail from 'react-feather/dist/icons/mail';
import Smartphone from 'react-feather/dist/icons/smartphone';
import Github from 'react-feather/dist/icons/github';
import Linkedin from 'react-feather/dist/icons/linkedin';

import styles from './contact.module.css';

const Contact = () => (
  <Grid
    component="section"
    className={classNames('container', styles.contactContainer)}
    container
    alignItems="center"
  >
    <Grid item xs={12} sm={8}>
      <h1>Pongámonos en contacto</h1>
      <p>Si tienes un proyecto en mente o deseas conversar, contáctame. Me encantaría formar parte de tu equipo.</p>
      <Grid
        container
        item
        xs={12}
        direction="row"
        alignItems="center"
        className={styles.contactInfo}
      >
        <Mail size={20} className={styles.icon} />
        <a href="mailto:aichumioque@gmail.com">aichumioque@gmail.com</a>
      </Grid>
      <Grid
        container
        item
        xs={12}
        direction="row"
        alignItems="center"
        className={styles.contactInfo}
      >
        <Smartphone size={20} className={styles.icon} />
        <p>(+51) 965 062 013</p>
      </Grid>
    </Grid>
  </Grid>
);

export default Contact;
