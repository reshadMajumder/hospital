import React from 'react';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "T Popular General Hospital pvt",
    "image": "https://tpopulargeneralhospitalpvt.com/images/logo.png",
    "logo": "https://tpopulargeneralhospitalpvt.com/images/logo.png",
    "description": "Leading healthcare provider offering comprehensive medical services in Habiganj, Bangladesh. We provide quality healthcare with modern facilities and experienced medical professionals.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "New Pouro Bus Terminal",
      "addressLocality": "Habiganj",
      "addressRegion": "Habiganj",
      "postalCode": "3300",
      "addressCountry": "Bangladesh"
    },
    "telephone": "01750897425",
    "url": "https://tpopulargeneralhospitalpvt.com",
    "availableService": [
      {
        "@type": "MedicalSpecialty",
        "name": "Emergency Care"
      },
      {
        "@type": "MedicalSpecialty",
        "name": "Gastrology"
      },
      {
        "@type": "MedicalSpecialty",
        "name": "General Medicine"
      },
      {
        "@type": "MedicalSpecialty",
        "name": "Surgery"
      },
      {
        "@type": "MedicalSpecialty",
        "name": "Diagnostic Services"
      }
    ],
    "openingHours": "Mo-Su 00:00-24:00",
    "hasMap": "https://www.google.com/maps?q=T+Popular+General+Hospital+pvt+habiganj",
    "sameAs": [
      "https://facebook.com/tpopulargeneralhospital",
      "https://twitter.com/tpopularhospital"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

export default StructuredData; 