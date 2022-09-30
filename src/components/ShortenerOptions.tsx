import { EyeSlashIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const ShortenerOptions = () => {
  return (
    <div className='flex items-center justify-center w-full space-x-4'>
      <button className='flex items-center px-2 py-2 text-sm leading-none rounded-md hover:bg-base-100 text-base-600 group'>
        <LockClosedIcon className='w-5 h-5 mr-2' />
        Add password
      </button>
      <button className='flex items-center px-2 py-2 text-sm leading-none rounded-md hover:bg-base-100 text-base-600 group'>
        <EyeSlashIcon className='w-5 h-5 mr-2' />
        Mark as sensitive
      </button>
    </div>
  );
};

export default ShortenerOptions;
