import type { Metadata } from 'next';

import { AppNavigator } from './components/AppNavigator';
import { AppFooter } from './components/AppFooter';
import { type Locale } from '@/utils/i18n-config';
import { getDictionary } from '@/utils/get-dictionary';

interface PageLayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}
export default async function PageLayout({ children, params }: Readonly<PageLayoutProps>) {
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <AppNavigator dictionary={dictionary} />
      {children}
      <AppFooter dictionary={dictionary} />
    </>
  );
}

export const metadata: Metadata = {
  title: 'AI intelligent chatbot service, 5G messaging innovation leader - Humming',
  description: 'Generated by create next app'
};
