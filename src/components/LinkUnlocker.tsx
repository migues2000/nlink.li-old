import { useEffect, useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { default as toast } from 'react-hot-toast';

type LinkUnlockerProps = { id: string };

const LinkUnlocker = ({ id }: LinkUnlockerProps) => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  useEffect(() => {
    setIsValid(undefined);
  }, [password]);

  const router = useRouter();

  const handleUnlock = async () => {
    setIsLoading(true);
    const result = await fetch('/api/verify-password', {
      method: 'POST',
      body: JSON.stringify({ id, password }),
    });
    if (result.status !== 200)
      return (
        setIsValid(false), setIsLoading(false), toast.error('Invalid Password')
      );

    setIsValid(true);
    toast.loading('Redirecting...');
    router.push(await result.text());
  };

  return (
    <div className='flex flex-col items-center justify-center -mt-16'>
      <LockClosedIcon className='w-32 h-32 text-primary' />
      <div className='px-6 leading-8 text-center'>
        <p>This link is protected by a password.</p>
      </div>
      <div className='px-6 mt-6'>
        <div className='relative w-full form-control'>
          <div className='absolute top-0 bottom-0 w-5 h-5 my-auto left-4'>
            <LockClosedIcon className='w-5 h-5 text-base-500' />
          </div>
          <input
            disabled={isLoading}
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={
              isValid === false
                ? 'input input-bordered input-error pl-11'
                : 'input input-bordered pl-11'
            }
          />
        </div>
      </div>
      <button
        onClick={handleUnlock}
        className={
          isLoading
            ? 'mt-6 btn btn-primary gap-2 loading'
            : 'mt-6 btn btn-primary gap-2'
        }
      >
        Unlock
      </button>
    </div>
  );
};

export default LinkUnlocker;
