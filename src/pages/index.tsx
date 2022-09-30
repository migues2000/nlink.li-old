import type { NextPage } from 'next';
import { default as PageLayout } from '@components/layout/PageLayout';
import { default as LinkInput } from '@components/LinkInput';
import { default as ShortenerOptions } from '@components/ShortenerOptions';

const HomePage: NextPage = () => {
  return (
    <PageLayout title='Link Shortener'>
      <div className='flex flex-col items-center justify-center p-4 space-y-4 w-96'>
        <LinkInput />
        <ShortenerOptions />
      </div>
    </PageLayout>
  );
};

export default HomePage;
