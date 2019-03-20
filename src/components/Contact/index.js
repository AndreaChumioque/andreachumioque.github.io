import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './contact.module.css';

const Contact = () => (
  <section className={classNames('container', styles.contactContainer)}>
    <h1>Pongámonos en contacto</h1>
    <p>Si te gustó mi trabajo o deseas conversar, envíame un email a <a href="mailto:aichumioque@gmail.com">aichumioque@gmail.com</a></p>
    <p>Creemos grandes cosas.</p>
  </section>
);

export default Contact;
