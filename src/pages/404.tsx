import { default as PageLayout } from '@components/layout/PageLayout';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  return (
    <PageLayout title='Not Found'>
      <div className='flex flex-col items-center justify-center space-y-8'>
        <h1 className='text-4xl font-bold'>404 - Not Found</h1>
        <button
          onClick={() => router.push('/')}
          className='inline-flex justify-center px-4 py-2 text-sm font-medium uppercase transition-colors border border-transparent rounded-md text-primary-900 bg-primary-100 hover:bg-primary-200 focus:outline-none'
        >
          Go back to Home
        </button>
      </div>
    </PageLayout>
  );
};

export default NotFound;
