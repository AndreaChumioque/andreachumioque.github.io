import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact from '../components/Contact';

const IndexPage = () => (
  <Layout>
    <SEO title="Contacto" keywords={['front-end', 'developer', 'web']} />
    <Contact />
  </Layout>
)

export default IndexPage
