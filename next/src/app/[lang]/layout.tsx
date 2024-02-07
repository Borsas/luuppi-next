import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { getDictionary } from '@/dictionaries';
import { SupportedLanguage } from '@/models/locale';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { i18n } from '../../i18n-config';
import './globals.css';

const titilliumFont = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '900'],
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang: SupportedLanguage };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html data-theme="light" lang={params.lang}>
      <body className={titilliumFont.className}>
        <Header dictionary={dictionary} lang={params.lang} />
        <div className="flex-1">{children}</div>
        <Footer dictionary={dictionary} />
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: SupportedLanguage };
}): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);

  return {
    title: dictionary.seo.title,
    description: dictionary.seo.description,
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
    alternates: {
      canonical: `/${params.lang}`,
      languages: {
        en: '/en',
        fi: '/fi',
      },
    },
  };
}
