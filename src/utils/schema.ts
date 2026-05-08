// JSON-LD schema generators for StyleCraft

export function buildCollectionSchema(category, products) {
  const urlMap = {
    secadores: "https://stylecraft.es/secadores",
    planchas: "https://stylecraft.es/planchas",
    rizadores: "https://stylecraft.es/rizadores",
    cepillos: "https://stylecraft.es/cepillos",
  };
  const nameMap = {
    secadores: "Mejores Secadores de Pelo 2026",
    planchas: "Mejores Planchas de Pelo 2026",
    rizadores: "Mejores Rizadores de Pelo 2026",
    cepillos: "Mejores Cepillos Secadores 2026",
  };
  const listNameMap = {
    secadores: "Top Secadores de Pelo Amazon.es",
    planchas: "Top Planchas de Pelo Amazon.es",
    rizadores: "Top Rizadores de Pelo Amazon.es",
    cepillos: "Top Cepillos Secadores Amazon.es",
  };

  const items = products.map(function(p, i) {
    return {
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "name": p.name,
        "image": p.image,
        "url": p.url,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": p.stars,
          "bestRating": 5
        }
      }
    };
  });

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": nameMap[category] || category,
    "url": urlMap[category] || "https://stylecraft.es",
    "description": "Guia de compra y reviews de " + category + ".",
    "publisher": {
      "@type": "Organization",
      "name": "StyleCraft",
      "url": "https://stylecraft.es"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": listNameMap[category] || "Top Amazon.es",
      "itemListElement": items
    }
  };
}

export function buildArticleSchema(title, url, description) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "name": title,
    "url": url,
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": "StyleCraft",
      "url": "https://stylecraft.es"
    },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-08",
    "mainEntity": {
      "@type": "WebPage",
      "name": title,
      "url": url
    }
  };
}

export function buildProductSchema(product) {
  const brandName = product.name.split(" ")[0];
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "url": product.url + "?tag=unmaquillaje-21",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.stars,
      "bestRating": 5,
      "ratingCount": 50
    },
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "EUR",
      "availability": product.price ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    },
    "brand": {
      "@type": "Brand",
      "name": brandName
    }
  };
}

export function buildHomeSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "StyleCraft",
    "url": "https://stylecraft.es",
    "description": "Tu guia experta en herramientas de estilismo capilar.",
    "publisher": {
      "@type": "Organization",
      "name": "StyleCraft",
      "url": "https://stylecraft.es"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://stylecraft.es/secadores?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
}