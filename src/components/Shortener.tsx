import { default as LinkInput } from '@components/LinkInput';
import { default as ShortenerOptions } from '@components/ShortenerOptions';
import { default as useShortener } from '@hooks/useShortener';
import {
  ArrowPathIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import { default as toast } from 'react-hot-toast';
import { Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

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
      .catch(
        (error) => (setStatus('idle'), toast.error('Something went wrong'))
      );
  };

  return (
    <>
      <Transition
        appear
        as={Fragment}
        show={status === 'idle'}
        enter='ease-out duration-300'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <div className='flex flex-col items-center justify-center p-4 space-y-4 w-96'>
          <LinkInput />
          <ShortenerOptions />
          <button
            disabled={link ? false : true}
            onClick={handleClick}
            className='inline-flex justify-center px-4 py-2 text-sm font-medium uppercase transition-colors border border-transparent rounded-md disabled:cursor-not-allowed sabled:text-base-300 disabled:bg-transparent disabled:text-base-300 disabled:hover:bg-transparent group text-primary-900 bg-primary-100 hover:bg-primary-200 focus:outline-none'
          >
            <ChevronRightIcon className='w-5 h-5 mr-1 transition-transform group-hover:translate-x-1' />
            Shorten
            <ChevronLeftIcon className='w-5 h-5 ml-1 transition-transform group-hover:-translate-x-1' />
          </button>
        </div>
      </Transition>
      <Transition
        appear
        as={Fragment}
        show={status === 'loading'}
        enter='ease-out duration-300'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <div className='flex flex-col items-center justify-center p-4 space-y-4 w-96'>
          <svg
            className='w-12 h-12 animate-spin text-primary-300'
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
        </div>
      </Transition>
      <Transition
        appear
        as={Fragment}
        show={status === 'done'}
        enter='ease-out duration-300'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <div className='flex flex-col items-center space-y-6'>
          <div className='flex items-center space-x-4'>
            <span>{result}</span>
            <button
              onClick={() => navigator.clipboard.writeText(result as string)}
              className='p-1 rounded-lg hover:bg-base-100'
            >
              <ClipboardDocumentIcon className='w-5 h-5 text-base-600' />
            </button>
          </div>
          <button
            onClick={() => setStatus('idle')}
            className='inline-flex justify-center px-4 py-2 text-sm font-medium uppercase transition-colors border border-transparent rounded-md disabled:cursor-not-allowed sabled:text-base-300 group text-base-900 hover:bg-base-100 focus:outline-none'
          >
            <ChevronRightIcon className='w-5 h-5 mr-1 transition-transform group-hover:translate-x-1' />
            Shorten another
            <ChevronLeftIcon className='w-5 h-5 ml-1 transition-transform group-hover:-translate-x-1' />
          </button>
        </div>
      </Transition>
    </>
  );
};

export default Shortener;
