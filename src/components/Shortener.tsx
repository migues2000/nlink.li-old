import { default as LinkInput } from '@components/LinkInput';
import { default as ShortenerOptions } from '@components/ShortenerOptions';
import { default as useShortener } from '@hooks/useShortener';
import { default as toast } from 'react-hot-toast';
import { useState } from 'react';

const Shortener = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');
  const [result, setResult] = useState<string>();
  const { link, shorten } = useShortener();

  const handleClick = async () => {
    setStatus('loading');
    await shorten()
      .then((result) => {
        toast.success('Succesufully shortened');
        setStatus('done');
        setResult(result);
      })
      .catch(() => (setStatus('idle'), toast.error('Something went wrong')));
  };

  return (
    <>
      {status === 'idle' || status === 'loading' ? (
        <div className='flex flex-col items-center justify-center p-4 space-y-4 w-96'>
          <LinkInput disabled={status === 'loading'} />
          <ShortenerOptions disabled={status === 'loading'} />
          <button
            disabled={link ? false : true}
            onClick={handleClick}
            className={
              status === 'loading'
                ? 'btn btn-primary btn-wide loading'
                : 'btn btn-primary btn-wide'
            }
          >
            Shorten
          </button>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center space-y-4'>
          <div className='stat place-items-center'>
            <div className='stat-title'>Your shortened link is ready</div>
            <div
              className='tooltip tooltip-bottom'
              data-tip='Click to copy to clipboard'
            >
              <div
                className='lowercase stat-value btn btn-ghost'
                onClick={() => navigator.clipboard.writeText(result as string)}
              >
                {result}
              </div>
            </div>
          </div>
          <button onClick={() => setStatus('idle')} className='btn btn-ghost'>
            Shorten another
          </button>
        </div>
      )}
    </>
  );
};

export default Shortener;
