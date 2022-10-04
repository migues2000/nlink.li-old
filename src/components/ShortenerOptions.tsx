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
      <div className='flex flex-col items-center justify-center w-full space-x-0 space-y-2 md:space-y-0 md:space-x-2 md:flex-row'>
        {password ? (
          <button
            onClick={() => (password ? removePassword() : null)}
            className={
              !link || disabled
                ? 'btn btn-ghost btn-sm btn-disabled bg-transparent'
                : 'btn btn-ghost btn-sm'
            }
          >
            <LockOpenIcon className='w-5 h-5 mr-2' />
            Remove password
          </button>
        ) : (
          <label
            htmlFor='add-password-modal'
            className={
              link !== undefined &&
              (disabled === undefined || disabled === false)
                ? 'btn btn-ghost btn-sm modal-button'
                : 'btn btn-ghost btn-sm modal-button btn-disabled bg-transparent'
            }
          >
            <LockClosedIcon className='w-5 h-5 mr-2' />
            Add password
          </label>
        )}
        <button
          onClick={() =>
            isSensitive ? unmarkAsSensitive() : markAsSensitive()
          }
          className={
            !link || disabled
              ? 'btn btn-ghost btn-sm modal-button btn-disabled bg-transparent'
              : 'btn btn-ghost btn-sm modal-button'
          }
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
