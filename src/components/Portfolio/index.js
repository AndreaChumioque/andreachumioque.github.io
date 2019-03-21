import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';
import { Grid } from '@material-ui/core';

import styles from './portfolio.module.css';
import ProjectInfo from './ProjectInfo';

const portfolio = [
  {
    title: 'Codebook',
    description: 'Propuesta para red social enfocada a egresadas de Laboratoria, cuyo objetivo es mantener a las exalumnas en contacto.',
    image: 'codebook',
    demo: 'https://andreachumioque.github.io/codebook',
    github: 'https://github.com/AndreaChumioque/codebook',
    tools: ['jQuery', 'Bootstrap4', 'Firebase'],
  },
  {
    title: 'Foodmap',
    description: 'Aplicativo que localiza los restaurantes cercanos y muestra datos relevantes como dirección, precios y comida que ofrece.',
    image: 'foodmap',
    demo: 'https://andreachumioque.github.io/foodmap',
    github: 'https://github.com/AndreaChumioque/foodmap',
    tools: ['jQuery', 'Bootstrap4', 'Firebase'],
  },
  {
    title: 'MovieGeek',
    description: 'Aplicativo web enfocado al público geek, que brinda información sobre películas del género de ciencia ficción.',
    image: 'moviegeek',
    demo: 'https://github.com/AndreaChumioque/moviegeek',
    github: 'https://github.com/AndreaChumioque/moviegeek',
    tools: ['React', 'Material UI'],
  },
  {
    title: 'Data dashboard',
    description: 'Herramienta para el despliegue de datos de las distintas generaciones de Laboratoria por año y sede.',
    image: 'moviegeek',
    demo: 'https://andreachumioque.github.io/foodmap',
    github: 'https://github.com/AndreaChumioque/foodmap',
    tools: [],
  }
];

const Portfolio = () => (
  <StaticQuery
    query={graphql`
      query {
        codebook: file(relativePath: { eq: "codebook-mockup.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        foodmap: file(relativePath: { eq: "foodmap-mockup.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        moviegeek: file(relativePath: { eq: "moviegeek-thumb.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Grid container component="section" className={classNames('vh100')}>
        {portfolio.map(work => (
          <Grid key={work.title} item xs={12} sm={6} className={styles.workBox}>
            <ProjectInfo work={work}/>
            <Img fluid={data[work.image].childImageSharp.fluid} className={styles.workImage} />
          </Grid>
        ))}
      </Grid>
    )}
  />
);

export default Portfolio;
