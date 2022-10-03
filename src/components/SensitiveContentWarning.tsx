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
      <button onClick={onConcern} className='mt-6 btn btn-error btn-outline'>
        Continue anyways
      </button>
    </div>
  );
};

export default SensitiveContentWarning;
