import { default as PageFooter } from './PageFooter';
import { default as PageHeader } from './PageHeader';

type PageLayoutProps = { children: React.ReactNode; title: string };

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className='flex flex-col items-center w-full h-full'>
      <PageHeader />
      <main className='flex flex-col items-center justify-center flex-1'>
        {children}
      </main>
      <PageFooter />
    </div>
  );
};

export default PageLayout;
