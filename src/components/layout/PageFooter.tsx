import { HeartIcon } from '@heroicons/react/24/outline';

const PageFooter = () => {
  return (
    <footer className='gap-2 p-4 footer footer-center'>
      <p className='flex items-center leading-none'>
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
      <p className='flex items-center leading-none'>
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
