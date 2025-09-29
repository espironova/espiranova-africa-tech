import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  imageAlt?: string;
  noindex?: boolean;
}

export const SEO = ({
  title,
  description,
  keywords,
  image = "https://espiranova.com/lovable-uploads/espiranova-logo-new.png",
  url = "https://espiranova.com",
  type = "website",
  imageAlt = "EspiraNova - Technology solutions for Africa",
  noindex = false
}: SEOProps) => {
  const fullTitle = title.includes("EspiraNova") ? title : `${title} | EspiraNova`;

  const orgStructuredData = {
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

  const siteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EspiraNova",
    "url": "https://espiranova.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://espiranova.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="EspiraNova" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:site" content="@espiranova" />
      <meta name="twitter:creator" content="@espiranova" />

      {/* Technical SEO */}
      <meta name="author" content="EspiraNova" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="theme-color" content="#0ea5e9" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(orgStructuredData)}</script>
      <script type="application/ld+json">{JSON.stringify(siteStructuredData)}</script>
    </Helmet>
  );
};