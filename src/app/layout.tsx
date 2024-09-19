import { Inter } from 'next/font/google';

import PrelineScript from './[locale]/components/PrelineScript';
import { i18n, type Locale } from '@/utils/i18n-config';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

interface RootLayoutProps {
  children?: React.ReactNode;
  locale: string;
}

const RootLayout = async ({ children, locale }: RootLayoutProps) => {
  return (
    <html className="light">
      <body className={inter.className}>
        <div className="bg-theme min-h-screen">{children}</div>
      </body>
      <PrelineScript />
    </html>
  );
};

export default RootLayout;
