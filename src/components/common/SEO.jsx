import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords,
  canonicalUrl,
  ogImage,
  ogType = 'website'
}) => {
  const siteUrl = process.env.REACT_APP_SITE_URL || 'https://tpopulargeneralhospitalpvt.com';
  const defaultDescription = 'T Popular General Hospital pvt is a leading healthcare provider in Habiganj, Bangladesh, offering comprehensive medical services, experienced doctors, and state-of-the-art facilities for quality patient care.';
  const defaultKeywords = 'hospital in Habiganj, healthcare, medical services, doctors, specialists, appointments, emergency care, T Popular General Hospital';
  const defaultOgImage = `${siteUrl}/images/logo.png`;
  
  return (
    <Helmet>
      <title>{title ? `${title} |Tpopular General Hospital pvt` : 'Tpopular General Hospital pvt - Quality Healthcare Services'}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Favicon */}
      <link rel="icon" href="/images/fav_icon.png" type="image/png" />
      <link rel="apple-touch-icon" href="/images/logo.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || siteUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title || 'Tpopular General Hospital pvt'} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || 'Tpopular General Hospital pvt'} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
};

export default SEO; 