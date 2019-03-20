import React from 'react';
// import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';
import { Grid } from '@material-ui/core';

// import styles from './portfolio.module.css';

const portfolio = [
  {
    title: 'Codebook',
    description: 'Propuestade red social enfocada a egresadas de Laboratoria, cuyo objetivo es mantener a las exalumnas en contacto.',
    // image: 
    urlDemo: 'https://andreachumioque.github.io/codebook',
    urlGithub: 'https://github.com/AndreaChumioque/codebook',
    tools: ['jQuery', 'Bootstrap4', 'Firebase'],
  },
  {
    title: 'Foodmap',
    description: 'Aplicativo que localiza los restaurantes cercanos y muestra datos relevantes como dirección, precios y comida que ofrece.',
    image: 'foodmap-thumb.png',
    urlDemo: '',
    urlGithub: '',
    tools: ['jQuery', 'Bootstrap4', 'Firebase'],
  },
  {
    title: 'MovieGeek',
    description: 'Aplicativo web enfocado al público geek, que brinda información sobre películas del género de ciencia ficción.',
    // image: ''
    urlDemo: '',
    urlGithub: '',
    tools: [],
  },
  {
    title: 'Data dashboard',
    description: 'Propuestade red social enfocada a egresadas de Laboratoria, cuyo objetivo es mantener a las exalumnas en contacto.',
    urlDemo: '',
    urlGithub: '',
    tools: [],
  }
];

const Portfolio = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Grid container component="section" className={classNames('container')}>
        {portfolio.map(work => (
          <Grid key={work.title} item xs={12} md={6}>
            <h2>{work.title}</h2>
            <p>{work.description}</p>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </Grid>
        ))}
      </Grid>
    )}
  />
);

export default Portfolio;
