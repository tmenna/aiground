import { useEffect } from 'react';

export function SEO() {
  useEffect(() => {
    document.title = "AIGround.com | Premium AI Domain Name for Acquisition";
    
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMeta('description', 'AIGround.com is a premium .com domain built for the next generation of artificial intelligence. Available for acquisition at $100,000.');
    setMeta('og:title', 'AIGround.com | Premium AI Domain for Acquisition', true);
    setMeta('og:description', 'Own one of the Internet\'s premier AI brands. Available for acquisition at $100,000.', true);
    setMeta('og:type', 'website', true);
    setMeta('theme-color', '#06060a');

    // Schema.org
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "AIGround.com Premium Domain Acquisition",
      "description": "AIGround.com is a premium .com domain built for the next generation of artificial intelligence. Available for acquisition.",
      "offers": {
        "@type": "Offer",
        "price": "100000.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://aiground.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Holtek Solutions LLC",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2108 N ST STE N",
          "addressLocality": "Sacramento",
          "addressRegion": "CA",
          "postalCode": "95816",
          "addressCountry": "USA"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-951-551-4528",
          "email": "holly@holtekllc.com",
          "contactType": "sales"
        }
      }
    };

    let script = document.querySelector('#schema-org');
    if (!script) {
      script = document.createElement('script');
      script.id = 'schema-org';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
    
    // Add dark class to html to enforce dark theme globally
    document.documentElement.classList.add('dark');
  }, []);

  return null;
}
