import { default as PageLayout } from '@components/layout/PageLayout';
import { default as Image } from 'next/image';
import { default as NotFoundIllustration } from '../assets/404.svg';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  return (
    <PageLayout title='Not Found'>
      <div className='flex flex-col items-center justify-center space-y-8'>
        <Image
          src={NotFoundIllustration}
          width={400}
          height={280}
          objectFit='contain'
          objectPosition='center'
          className='w-80 h-80'
        />
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
