import type { NextPage } from 'next';
import { default as PageLayout } from '@components/layout/PageLayout';
import { default as Shortener } from '@components/Shortener';

const HomePage: NextPage = () => {
  return (
    <PageLayout title='Link Shortener'>
      <Shortener />
    </PageLayout>
  );
};

export default HomePage;
