import { useEffect } from 'react';

const SITE_URL = 'https://houssain.app';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

const localeByLanguage = {
  ar: 'ar_AR',
  en: 'en_US',
  es: 'es_ES',
  fr: 'fr_FR',
};

const ensureLeadingSlash = (value = '/') => (value.startsWith('/') ? value : `/${value}`);

const buildAbsoluteUrl = (path = '/') => new URL(ensureLeadingSlash(path), SITE_URL).toString();

const upsertMeta = ({ name, property, content }) => {
  if (!content) {
    return;
  }

  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('meta');

    if (name) {
      tag.setAttribute('name', name);
    }

    if (property) {
      tag.setAttribute('property', property);
    }

    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
};

const upsertLink = ({ rel, href, hreflang }) => {
  if (!href) {
    return;
  }

  const selector =
    rel === 'alternate'
      ? `link[rel="alternate"][hreflang="${hreflang}"]`
      : `link[rel="${rel}"]`;

  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);

    if (hreflang) {
      tag.setAttribute('hreflang', hreflang);
      tag.dataset.seoAlternate = 'true';
    }

    document.head.appendChild(tag);
  }

  tag.setAttribute('href', href);
};

const upsertStructuredData = (schema) => {
  const scriptId = 'seo-structured-data';
  let script = document.head.querySelector(`#${scriptId}`);

  if (!schema) {
    script?.remove();
    return;
  }

  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = scriptId;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
};

const Seo = ({
  title,
  description,
  path = '/',
  image = '/logo.png',
  type = 'website',
  robots = 'index,follow',
  keywords,
  lang = 'ar',
  dir = 'rtl',
  structuredData,
  alternates = [],
}) => {
  useEffect(() => {
    const canonicalUrl = buildAbsoluteUrl(path);
    const imageUrl = image.startsWith('http') ? image : buildAbsoluteUrl(image);
    const locale = localeByLanguage[lang] ?? localeByLanguage.ar;

    document.title = title;
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;

    upsertMeta({ name: 'description', content: description });
    upsertMeta({ name: 'robots', content: robots });
    upsertMeta({ name: 'keywords', content: keywords });
    upsertMeta({ name: 'theme-color', content: '#2563eb' });
    upsertMeta({ property: 'og:type', content: type });
    upsertMeta({ property: 'og:title', content: title });
    upsertMeta({ property: 'og:description', content: description });
    upsertMeta({ property: 'og:url', content: canonicalUrl });
    upsertMeta({ property: 'og:image', content: imageUrl });
    upsertMeta({ property: 'og:site_name', content: 'Houssain Apps' });
    upsertMeta({ property: 'og:locale', content: locale });
    upsertMeta({ name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta({ name: 'twitter:title', content: title });
    upsertMeta({ name: 'twitter:description', content: description });
    upsertMeta({ name: 'twitter:image', content: imageUrl });
    upsertLink({ rel: 'canonical', href: canonicalUrl });

    document.head
      .querySelectorAll('link[data-seo-alternate="true"]')
      .forEach((tag) => tag.remove());

    alternates.forEach((alternate) => {
      upsertLink({
        rel: 'alternate',
        hreflang: alternate.hrefLang,
        href: buildAbsoluteUrl(alternate.path),
      });
    });

    upsertStructuredData(structuredData);
  }, [alternates, description, dir, image, keywords, lang, path, robots, structuredData, title, type]);

  return null;
};

Seo.siteUrl = SITE_URL;
Seo.defaultImage = DEFAULT_IMAGE;

export default Seo;
