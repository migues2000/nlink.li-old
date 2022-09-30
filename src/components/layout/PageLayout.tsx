import { default as Head } from 'next/head';
import { default as PageFooter } from './PageFooter';
import { default as PageHeader } from './PageHeader';
import { Toaster } from 'react-hot-toast';

type PageLayoutProps = { children: React.ReactNode; title: string };

const PageLayout = ({ children, title }: PageLayoutProps) => {
  return (
    <div className='flex flex-col items-center w-full h-full'>
      <Head>
        <title>{title}</title>
      </Head>
      <Toaster position='top-center' reverseOrder={false} />
      <PageHeader />
      <main className='flex flex-col items-center justify-center flex-1'>
        {children}
      </main>
      <PageFooter />
    </div>
  );
};

export default PageLayout;
