import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

type SensitiveContentWarningProps = { onConcern: () => void };

const SensitiveContentWarning = ({
  onConcern,
}: SensitiveContentWarningProps) => {
  return (
    <div className='flex flex-col items-center justify-center -mt-16'>
      <ExclamationTriangleIcon className='w-32 h-32 text-warning' />
      <div className='px-6 leading-8 text-center'>
        <p>
          The following content has been marked as <strong>sensitive</strong>.
        </p>
        <p>
          This means that it could contain <strong>violence</strong>,{' '}
          <strong>drugs</strong>, <strong>nudity</strong>, etc.
        </p>
      </div>
      <button onClick={onConcern} className='mt-6 btn btn-warning btn-outline'>
        Continue anyways
      </button>
    </div>
  );
};

export default SensitiveContentWarning;
