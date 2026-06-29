import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  /** Pass a JSON-LD object or array — will be serialised into a <script> tag */
  schema?: object | object[];
}

const SITE_NAME = 'D.P. Curtis Trucking';
const BASE_URL  = 'https://dpcurtis.com';
const DEFAULT_IMAGE = `${BASE_URL}/src/assets/dpcurtisimages/truck2dpc.webp`;

export const SEO = ({ title, description, canonical, ogImage, schema }: SEOProps) => {
  const fullTitle    = `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  const image        = ogImage ?? DEFAULT_IMAGE;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="title"       content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical"    href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={canonicalUrl} />
      <meta property="og:image"       content={image} />

      {/* Twitter */}
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={image} />

      {/* JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
