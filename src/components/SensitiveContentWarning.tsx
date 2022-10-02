import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { default as Image } from 'next/image';
import { default as WarningIllustration } from '../assets/warning.svg';

type SensitiveContentWarningProps = { onConcern: () => void };

const SensitiveContentWarning = ({
  onConcern,
}: SensitiveContentWarningProps) => {
  return (
    <div className='flex flex-col items-center justify-center -mt-16'>
      <Image
        src={WarningIllustration}
        width={300}
        height={280}
        objectFit='contain'
        objectPosition='center'
        className='w-80 h-80'
      />
      <div className='px-6 leading-8 text-center'>
        <p>
          The following content has been marked as <strong>sensitive</strong>.
        </p>
        <p>
          This means that it could contain <strong>violence</strong>,{' '}
          <strong>drugs</strong>, <strong>nudity</strong>, etc.
        </p>
      </div>
      <button
        onClick={onConcern}
        className='inline-flex justify-center px-4 py-2 mt-6 text-sm font-medium text-red-900 uppercase transition-colors bg-red-100 border border-transparent rounded-md disabled:cursor-not-allowed sabled:text-base-300 disabled:bg-transparent disabled:text-base-300 disabled:hover:bg-transparent group hover:bg-red-200 focus:outline-none'
      >
        Continue
        <ChevronRightIcon className='w-5 h-5 ml-1 transition-transform group-hover:translate-x-1' />
      </button>
    </div>
  );
};

export default SensitiveContentWarning;
