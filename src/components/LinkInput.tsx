import { LinkIcon } from '@heroicons/react/20/solid';

const LinkInput = () => {
  return (
    <div className='relative w-full'>
      <div className='absolute top-0 bottom-0 w-5 h-5 my-auto left-3'>
        <LinkIcon className='w-5 h-5 text-base-500' />
      </div>
      <input
        type='url'
        className='w-full py-2 pl-10 pr-2 transition-colors border rounded-lg shadow-xl bg-base-50 border-base-200 shadow-base-100 focus:outline-none focus:border-primary-300'
      />
    </div>
  );
};

export default LinkInput;
