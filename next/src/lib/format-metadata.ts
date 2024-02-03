import { Metadata } from 'next';

export default function formatMetadata(
  content: any,
  pathname: string,
): Metadata {
  const seo = content.data.attributes.Seo;

  if (!seo) throw new Error('No SEO data found');

  const cmsUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

  let twitterImage: string | null = null;
  if (seo.twitter?.twitterImage?.data?.attributes?.url) {
    twitterImage = `${cmsUrl}${seo.twitter.twitterImage.data.attributes.url}`;
  }
  let openGraphImage: string | null = null;
  if (seo.openGraph?.openGraphImage?.data?.attributes?.url) {
    openGraphImage = `${cmsUrl}${seo.openGraph.openGraphImage.data.attributes.url}`;
  }

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    authors: seo.metaAuthor,
    keywords: seo.metaKeywords,
    alternates: {
      canonical: pathname,
      languages: {
        fi: `/fi${pathname.slice(3)}`,
        en: `/en${pathname.slice(3)}`,
      },
    },
    openGraph: {
      title: seo.openGraph.openGraphTitle,
      description: seo.openGraph.openGraphDescription,
      url: pathname,
      images: openGraphImage ? [openGraphImage] : undefined,
      siteName: 'Luuppi ry',
    },
    twitter: {
      title: seo.twitter.twitterTitle,
      description: seo.twitter.twitterDescription,
      card: 'summary_large_image',
      images: twitterImage ? [twitterImage] : undefined,
    },
  };
}
