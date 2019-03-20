import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './about.module.css';

const About = () => (
  <section className={classNames('container', styles.aboutContainer)}>
    <h1>
      Hola
    </h1>
    <p>
      Soy Andrea y me encanta crear, desde siempre he tenido una pasión por convertir lo que imagino en realidad. Soy Diseñadora Gráfica y Front-end Developer, egresada de Laboratoria, lo que me ha llevado a explorar mi creatividad y análisis para encontrar soluciones.
    </p>

    <p>
      Además de mi interés por la tencología, tengo gran amor por el arte. Es por eso que en mi tiempo libre, formo parte de la Orquesta Peruana de Clarinetes, visito galerías de arte, realizo ilustraciones y me gusta viajar.
    </p>
  </section>
);

export default About;
