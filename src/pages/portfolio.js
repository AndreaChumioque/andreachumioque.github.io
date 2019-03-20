import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Portfolio from '../components/Portfolio';

const IndexPage = () => (
  <Layout>
    <SEO title="Portafolio" keywords={['front-end', 'developer', 'web', 'portfolio', 'design']} />
    <Portfolio />
  </Layout>
)

export default IndexPage
