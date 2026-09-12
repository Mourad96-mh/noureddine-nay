import { Helmet } from "react-helmet-async";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../config.js";

/**
 * Balises SEO d'une page : titre, description, canonical, Open Graph,
 * Twitter Card et, si fourni, un bloc JSON-LD.
 */
export default function Seo({ title, description, path = "/", image = OG_IMAGE, noindex = false, jsonLd }) {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
