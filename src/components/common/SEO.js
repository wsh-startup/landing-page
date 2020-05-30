import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description:
    'We connect people with app ideas to Tech Experts that will build them. Have an app in mind? Join now!.',
  title: 'WeSoarHigh',
  url: 'https://wesoarhigh.com',
  author: 'WeSoarHigh Team',
  keywords: [
    'wesoarhigh',
    'freelance',
    'startup',
    'developers',
    'tech marketplace',
    'build app',
  ],
  img: 'https://wesoarhigh.com/images/seo-cover.png',
  twitterId: '@wesoarhighph',
  facebookId: '242756503817223',
};

const SEO = () => {
  return (
    <Helmet>
      <meta property="fb:app_id" content={SEO_DATA.facebookId} />
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:image" content={SEO_DATA.img} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={SEO_DATA.twitterId} />
      <meta name="twitter:site" content={SEO_DATA.url} />
      <meta name="twitter:title" content={SEO_DATA.title} />
      <meta name="twitter:description" content={SEO_DATA.description} />
      <meta name="twitter:domain" content={SEO_DATA.url} />
      <meta name="twitter:image:src" content={SEO_DATA.img} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
