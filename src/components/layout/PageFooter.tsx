import { HeartIcon } from '@heroicons/react/24/outline';

const PageFooter = () => {
  return (
    <footer className='flex flex-col items-center justify-center w-full p-4 space-y-2'>
      <p className='flex items-center space-x-2 leading-none'>
        <span>Made with</span>
        <HeartIcon className='w-5 h-5 text-red-500' />
        <span>by</span>
        <a
          rel='noreferrer'
          target='_blank'
          href='https://github.com/migues2000'
          className='text-blue-500'
        >
          @migues2000
        </a>
      </p>
      <p>
        Illustrations by{' '}
        <a
          rel='noreferrer'
          target='_blank'
          href='https://storyset.com/'
          className='text-blue-500'
        >
          Storyset
        </a>
      </p>
    </footer>
  );
};

export default PageFooter;
