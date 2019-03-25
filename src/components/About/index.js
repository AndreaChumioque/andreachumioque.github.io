import React from 'react';
// import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';
import { Grid } from '@material-ui/core';

import styles from './about.module.css';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        bio: file(relativePath: { eq: "bio.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Grid
        container
        component="section"
        direction="column"
        className={classNames('container', styles.aboutContainer)}
      >
        <h1>
          Hola! Soy Andrea.
        </h1>
        <Grid container item>
          <Grid item xs={12} sm={8} className={classNames('pr15', 'text-justify')}>
            <p>
              Soy front-end developer y diseñadora gráfica. Disfruto de convertir lo que imagino en algo tangible, lo que me ha llevado a explorar mi creatividad y capacidad de análisis para encontrar soluciones.
            </p>
            <p>
              Siempre he tenido una gran inclinación por la tecnología y es lo que me impulsó a ser parte de la 7ma generación de Laboratoria en Lima. A partir de ese momento, he trabajado como front-end developer utilizando herramientas como <b>React</b>, <b>React Native</b>, <b>Material UI</b> y consumo de datos con <b>GraphQL</b>. 
            </p>
            <p>
              Además de mi interés por la tencología, tengo gran amor por el arte y los animales. Busco rodearme de lo que saque lo mejor de mí y nunca perder la motivación para seguir aprendiendo.
            </p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Img fluid={data.bio.childImageSharp.fluid} className={styles.aboutImage} />
          </Grid>
        </Grid>
      </Grid>
    )}
  />
);

export default About;
