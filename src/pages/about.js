import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../components/About';

const IndexPage = () => (
  <Layout>
    <SEO title="Sobre mí" keywords={['front-end', 'developer', 'web']} />
    <About />
  </Layout>
)

export default IndexPage
