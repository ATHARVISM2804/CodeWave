import React from 'react';
import { Helmet } from 'react-helmet-async';
import Sitemap from '../components/Sitemap';

const SitemapPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap | CodeWave Intelligence Studio - Navigate Our Website</title>
        <meta name="description" content="Complete sitemap of CodeWave Intelligence Studio website. Find all our pages, services, and resources in one organized view." />
        <meta name="keywords" content="sitemap, website navigation, CodeWave pages, services directory, site structure" />
        <link rel="canonical" href="https://codewave.it.com/sitemap" />
      </Helmet>
      
      <div className="pt-16" style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
        <Sitemap />
      </div>
    </>
  );
};

export default SitemapPage;
