import { LinkIcon } from '@heroicons/react/20/solid';
import { default as useShortener } from '@hooks/useShortener';
import { ChangeEventHandler, useState } from 'react';

const LinkInput = () => {
  const { setLink } = useShortener();
  const [isValid, setIsValid] = useState<boolean>();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.target.value !== ''
      ? isValidLink(event.target.value)
        ? (setLink(event.target.value), setIsValid(true))
        : (setLink(undefined), setIsValid(false))
      : setIsValid(undefined);
  };

  const isValidLink = (link: string) => {
    const urlRegex = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+#]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // fragment
    return urlRegex.test(link);
  };

  return (
    <div className='relative w-full'>
      <div className='absolute top-0 bottom-0 w-5 h-5 my-auto left-3'>
        <LinkIcon className='w-5 h-5 text-base-500' />
      </div>
      <input
        type='url'
        onChange={handleChange}
        className={
          inputStyles[
            isValid === undefined ? 'neutral' : isValid ? 'valid' : 'invalid'
          ]
        }
      />
    </div>
  );
};

const inputCommonStyles =
  'w-full py-2 pl-10 pr-2 transition-colors border rounded-lg shadow-xl bg-base-50 border-base-200 shadow-base-100 focus:outline-none';

const inputStyles = {
  neutral: `focus:border-primary-300 ${inputCommonStyles}`,
  valid: `border-green-500 ${inputCommonStyles}`,
  invalid: `border-red-500 ${inputCommonStyles}`,
};

export default LinkInput;
