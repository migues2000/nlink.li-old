import { useState } from 'react';
import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  LockOpenIcon,
} from '@heroicons/react/24/outline';
import { default as useShortener } from '@hooks/useShortener';
import { default as PasswordDialog } from './PasswordDialog';

const ShortenerOptions = () => {
  const {
    link,
    isSensitive,
    markAsSensitive,
    unmarkAsSensitive,
    password,
    removePassword,
  } = useShortener();

  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);

  return (
    <>
      <PasswordDialog
        isOpen={isPasswordDialogOpen}
        onClose={() => setIsPasswordDialogOpen(false)}
      />
      <div className='flex items-center justify-center w-full space-x-4'>
        <button
          disabled={link ? false : true}
          onClick={() =>
            password ? removePassword() : setIsPasswordDialogOpen(true)
          }
          className='flex items-center px-2 py-2 text-sm leading-none rounded-md disabled:text-base-300 disabled:hover:bg-transparent hover:bg-base-100 text-base-600 group'
        >
          {password ? (
            <>
              <LockOpenIcon className='w-5 h-5 mr-2' />
              Remove password
            </>
          ) : (
            <>
              <LockClosedIcon className='w-5 h-5 mr-2' />
              Add password
            </>
          )}
        </button>
        <button
          disabled={link ? false : true}
          onClick={() =>
            isSensitive ? unmarkAsSensitive() : markAsSensitive()
          }
          className='flex items-center px-2 py-2 text-sm leading-none rounded-md disabled:text-base-300 disabled:hover:bg-transparent hover:bg-base-100 text-base-600 group'
        >
          {isSensitive ? (
            <>
              <EyeIcon className='w-5 h-5 mr-2' />
              Unmark as sensitive
            </>
          ) : (
            <>
              <EyeSlashIcon className='w-5 h-5 mr-2' />
              Mark as sensitive
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default ShortenerOptions;
