import ContentPage from '@/components/ContentPage/ContentPage';
import { getDictionary } from '@/dictionaries';
import { formatMetadata } from '@/libs/strapi/format-metadata';
import { getStrapiData } from '@/libs/strapi/get-strapi-data';
import { SupportedLanguage } from '@/models/locale';
import { APIResponseCollection } from '@/types/types';
import { Metadata } from 'next';

const url =
  '/api/organization-general?populate[0]=Content.banner&populate[1]=Seo.twitter.twitterImage&populate[2]=Seo.openGraph.openGraphImage';
const tags = ['organization-general'];

interface OrganizationProps {
  params: { lang: SupportedLanguage };
}

export default async function Organization({ params }: OrganizationProps) {
  const dictionary = await getDictionary(params.lang);

  const pageData = await getStrapiData<
    APIResponseCollection<'api::organization-general.organization-general'>
  >(params.lang, url, tags);

  return (
    <ContentPage
      contentData={pageData.data}
      dictionary={dictionary}
      lang={params.lang}
    />
  );
}

export async function generateMetadata({
  params,
}: OrganizationProps): Promise<Metadata> {
  const data = await getStrapiData<
    APIResponseCollection<'api::organization-general.organization-general'>
  >(params.lang, url, tags);

  const pathname = `/${params.lang}/organization`;

  return formatMetadata(data, pathname);
}
