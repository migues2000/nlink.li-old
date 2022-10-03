import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  LockOpenIcon,
} from '@heroicons/react/24/outline';
import { default as useShortener } from '@hooks/useShortener';

type ShortenerOptionsProps = { disabled?: boolean };

const ShortenerOptions = ({ disabled }: ShortenerOptionsProps) => {
  const {
    link,
    isSensitive,
    markAsSensitive,
    unmarkAsSensitive,
    password,
    removePassword,
  } = useShortener();

  return (
    <>
      <div className='flex flex-col items-center justify-center w-full space-x-2 md:flex-row'>
        {password ? (
          <button
            disabled={!link || disabled}
            onClick={() => (password ? removePassword() : null)}
            className={'btn btn-ghost btn-sm'}
          >
            <LockOpenIcon className='w-5 h-5 mr-2' />
            Remove password
          </button>
        ) : (
          <label
            htmlFor='add-password-modal'
            className={
              link
                ? 'btn btn-ghost btn-sm modal-button'
                : 'btn btn-ghost btn-sm modal-button btn-disabled'
            }
          >
            <LockClosedIcon className='w-5 h-5 mr-2' />
            Add password
          </label>
        )}
        <button
          disabled={!link || disabled}
          onClick={() =>
            isSensitive ? unmarkAsSensitive() : markAsSensitive()
          }
          className='btn btn-ghost btn-sm modal-button'
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
