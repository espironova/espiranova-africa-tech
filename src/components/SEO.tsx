import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = "https://espiranova.com",
  type = "website"
}: SEOProps) => {
  const fullTitle = title.includes("EspiraNova") ? title : `${title} | EspiraNova`;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EspiraNova",
    "description": "Ignite. Innovate. Impact. Technology solutions provider for Africa",
    "url": "https://espiranova.com",
    "logo": "https://espiranova.com/lovable-uploads/espiranova-logo-new.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "The Piano, Near 171 Brookside Dr",
      "addressLocality": "Nairobi",
      "addressCountry": "Kenya"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254728143812",
      "contactType": "customer service",
      "email": "info@espiranova.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/espiranova",
      "https://twitter.com/espiranova",
      "https://www.facebook.com/espiranova"
    ]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="EspiraNova" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@espiranova" />
      
      {/* Technical SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="EspiraNova" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};