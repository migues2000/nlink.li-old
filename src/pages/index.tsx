import type { NextPage } from 'next';
import { default as PageLayout } from '@components/layout/PageLayout';
import { ShortenerContextProvider } from '@contexts/ShortenerContext';
import { default as Shortener } from '@components/Shortener';
import { default as PasswordDialog } from '@components/PasswordDialog';

const HomePage: NextPage = () => {
  return (
    <PageLayout title='Link Shortener'>
      <ShortenerContextProvider>
        <Shortener />
      </ShortenerContextProvider>
    </PageLayout>
  );
};

export default HomePage;
