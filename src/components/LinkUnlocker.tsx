import { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';
import { default as toast } from 'react-hot-toast';

type LinkUnlockerProps = { id: string };

const LinkUnlocker = ({ id }: LinkUnlockerProps) => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleUnlock = async () => {
    setIsLoading(true);
    const result = await fetch('/api/verify-password', {
      method: 'POST',
      body: JSON.stringify({ id, password }),
    });
    if (result.status !== 200) return toast.error('Invalid Password');

    toast.loading('Redirecting...');
    router.push(await result.text());
  };

  return (
    <div className='flex flex-col items-center justify-center -mt-16 space-y-6'>
      <LockClosedIcon className='text-primary-300 w-28 h-28' />
      <div className='px-6 leading-8 text-center'>
        <p>This link is protected by a password.</p>
      </div>
      <div className='px-6'>
        <div className='relative w-full'>
          <div className='absolute top-0 bottom-0 w-5 h-5 my-auto left-3'>
            <LockClosedIcon className='w-5 h-5 text-base-500' />
          </div>
          <input
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className='w-full py-2 pl-10 pr-2 transition-colors border rounded-lg shadow-xl shadow-base-100 bg-base-50 border-base-200 focus:outline-none focus:border-primary-300'
          />
        </div>
      </div>
      <button
        onClick={handleUnlock}
        className='inline-flex justify-center px-4 py-2 text-sm font-medium uppercase transition-colors border border-transparent rounded-md text-primary-900 bg-primary-100 disabled:cursor-not-allowed sabled:text-base-300 disabled:bg-transparent disabled:text-base-300 disabled:hover:bg-transparent group hover:bg-primary-200 focus:outline-none'
      >
        Continue
        {!isLoading ? (
          <ChevronRightIcon className='w-5 h-5 ml-1 transition-transform group-hover:translate-x-1' />
        ) : (
          <svg
            className='w-5 h-5 ml-1 animate-spin'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              stroke-width='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
        )}
      </button>
    </div>
  );
};

export default LinkUnlocker;
