import { HeartIcon } from '@heroicons/react/24/outline';

const PageFooter = () => {
  return (
    <footer className='gap-2 p-4 footer footer-center'>
      <p className='flex items-center gap-1 leading-none'>
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
    </footer>
  );
};

export default PageFooter;
