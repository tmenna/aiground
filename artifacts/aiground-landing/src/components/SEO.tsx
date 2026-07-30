import { useEffect } from 'react';

export function SEO() {
  useEffect(() => {
    // Set page title
    document.title = 'AIGround.com — Premium AI Domain for Sale | $100,000';

    // Create or update meta tags
    const metaTags = [
      { name: 'description', content: 'AIGround.com is a premium .com domain built for the next generation of artificial intelligence. Short, memorable, and highly brandable. Available for acquisition at $100,000.' },
      { property: 'og:title', content: 'AIGround.com — Premium AI Domain for Sale' },
      { property: 'og:description', content: 'A premium .com domain built for the next generation of artificial intelligence. Short, memorable, and highly brandable.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://aiground.com' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'AIGround.com — Premium AI Domain for Sale' },
      { name: 'twitter:description', content: 'A premium .com domain built for the next generation of artificial intelligence. Short, memorable, and highly brandable.' },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;
      let meta = document.querySelector(`meta[${attribute}="${value}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, value!);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    });

    // Add JSON-LD structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          name: 'Holtek Solutions LLC',
          url: 'https://aiground.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '2108 N ST STE N',
            addressLocality: 'Sacramento',
            addressRegion: 'CA',
            postalCode: '95816',
            addressCountry: 'US'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-951-551-4528',
            email: 'holly@holtekllc.com',
            contactType: 'Sales'
          }
        },
        {
          '@type': 'WebPage',
          name: 'AIGround.com — Premium AI Domain for Sale',
          description: 'AIGround.com is a premium .com domain built for the next generation of artificial intelligence. Short, memorable, and highly brandable.',
          url: 'https://aiground.com'
        }
      ]
    });
    document.head.appendChild(script);
  }, []);

  return null;
}
