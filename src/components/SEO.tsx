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
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export const SEO = ({
  title,
  description,
  keywords,
  image = "https://espiranova.co.ke/lovable-uploads/espiranova-logo-new.png",
  url = "https://espiranova.co.ke",
  type = "website",
  imageAlt = "EspiraNova - Technology solutions for Africa",
  noindex = false,
  breadcrumbs
}: SEOProps) => {
  const fullTitle = title.includes("EspiraNova") ? title : `${title} | EspiraNova`;
  const baseUrl = "https://espiranova.co.ke";

  // Organization Structured Data
  const orgStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EspiraNova",
    "description": "Innovation with Impact. Technology solutions provider for Africa",
    "url": baseUrl,
    "logo": `${baseUrl}/lovable-uploads/espiranova-logo-new.png`,
    "foundingDate": "2016",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "The Piano, Near 171 Brookside Dr",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi",
      "addressCountry": "KE",
      "postalCode": "00100"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+254728143812",
        "contactType": "customer service",
        "email": "espiranova2@gmail.com",
        "areaServed": "KE",
        "availableLanguage": ["English"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+254783238429",
        "contactType": "sales",
        "email": "info@espiranova.com",
        "areaServed": "KE",
        "availableLanguage": ["English"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/espiranova",
      "https://twitter.com/espiranova",
      "https://www.facebook.com/espiranova"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50"
    }
  };

  // LocalBusiness Structured Data
  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}#business`,
    "name": "EspiraNova",
    "image": `${baseUrl}/lovable-uploads/espiranova-logo-new.png`,
    "description": "Technology solutions provider specializing in web development, business automation, API development, and digital transformation for African businesses",
    "url": baseUrl,
    "telephone": "+254728143812",
    "email": "info@espiranova.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "The Piano, Near 171 Brookside Dr",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi",
      "addressCountry": "KE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -1.2891,
      "longitude": 36.7878
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    }
  };

  // Website Structured Data
  const siteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EspiraNova",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Breadcrumb Structured Data
  const breadcrumbStructuredData = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      ...breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": crumb.name,
        "item": crumb.url
      }))
    ]
  } : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
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
      <meta name="geo.region" content="KE-110" />
      <meta name="geo.placename" content="Nairobi, Kenya" />
      <meta name="geo.position" content="-1.2891;36.7878" />
      <meta name="ICBM" content="-1.2891, 36.7878" />

      {/* Additional SEO Meta Tags */}
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="English" />
      <link rel="alternate" hrefLang="en" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(orgStructuredData)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessStructuredData)}</script>
      <script type="application/ld+json">{JSON.stringify(siteStructuredData)}</script>
      {breadcrumbStructuredData && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbStructuredData)}</script>
      )}
    </Helmet>
  );
};