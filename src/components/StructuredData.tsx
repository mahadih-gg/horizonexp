const siteUrl = 'https://horizonexp.com';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Horizon",
    "alternateName": "Horizon Short-form Video Engagement Platform",
    "legalName": "Flagship Technology Inc.",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/assets/images/opengraph.webp`,
      "width": 1200,
      "height": 630
    },
    "image": `${siteUrl}/assets/images/opengraph.webp`,
    "description": "Skyrocket customer engagement, conversion, and retention with ultra-fast, shoppable short-form video experience",
    "foundingOrganization": {
      "@type": "Organization",
      "name": "Flagship Technology Inc."
    },
    "foundingDate": "2025",
    "sameAs": [
      "https://www.linkedin.com/company/horizonera",
      "https://x.com/horizonera",
      "https://www.youtube.com/@Thehorizonera",
      "https://www.tiktok.com/@horizonexp.com",
      "https://www.pinterest.com/horizonexp"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "url": `${siteUrl}/contact`,
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "contactType": "Sales",
        "url": `${siteUrl}/contact`,
        "availableLanguage": "English"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Horizon",
    "url": siteUrl,
    "description": "Bring immersive short-form video experience to your site, store, or app that supercharges discovery, engagement and sales.",
    "publisher": {
      "@type": "Organization",
      "name": "Horizon",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/assets/images/opengraph.webp`
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Horizon",
    "applicationCategory": "Video Platform",
    "applicationSubCategory": "Short-form Video Engagement Platform",
    "operatingSystem": ["Web", "Mobile", "iOS", "Android"],
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0",
      "highPrice": "499",
      "offerCount": "4",
      "offers": [
        {
          "@type": "Offer",
          "name": "Starter Plan",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": `${siteUrl}/pricing`
        },
        {
          "@type": "Offer",
          "name": "Premium Plan",
          "price": "49",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": `${siteUrl}/pricing`
        },
        {
          "@type": "Offer",
          "name": "Pro Plan",
          "price": "199",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": `${siteUrl}/pricing`
        },
        {
          "@type": "Offer",
          "name": "Max Plan",
          "price": "499",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": `${siteUrl}/pricing`
        }
      ]
    },
    "description": "The world's most advanced short-form video engagement engine. Native short-form streaming, full-stack social commerce, all-in-one console, and big-tech grade performance. Transform your website, store, or app with immersive short-form video experiences that drive discovery, engagement, and sales.",
    "featureList": [
      "Add short-form on websites",
      "Add short-form on online stores",
      "Add short-form on landing pages",
      "Entry points / video carousels",
      "Fast video streams (all browsers)",
      "Add custom CTAs on any video",
      "AI recommendation for infinite scrolls",
      "Custom playlist with video tags",
      "Unique share links for all videos",
      "Customers can react to videos",
      "Customers can comment on videos",
      "Comments spam protected by AI",
      "Create in-video polls for customers",
      "Setup multiple content channels",
      "Easily upload & manage videos",
      "Central dashboards for everything",
      "20+ useful no code settings",
      "Powerful built-in usage analytics",
      "Setup multiple workspaces",
      "Invite team members",
      "Native Short-Form Streaming",
      "Full-Stack Social Commerce",
      "Shoppable campaigns",
      "Premium CTA styles"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "100",
      "bestRating": "5",
      "worstRating": "1"
    },
    "screenshot": `${siteUrl}/assets/images/horizon-console.webp`,
    "softwareVersion": "1.0",
    "releaseNotes": "Latest version includes enhanced streaming, improved analytics, and expanded customization options."
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

