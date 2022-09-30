import { default as LinkInput } from '@components/LinkInput';
import { default as ShortenerOptions } from '@components/ShortenerOptions';

const Shortener = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4 space-y-4 w-96'>
      <LinkInput />
      <ShortenerOptions />
    </div>
  );
};

export default Shortener;
