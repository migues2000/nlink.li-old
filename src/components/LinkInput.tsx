import { LinkIcon } from '@heroicons/react/20/solid';
import { default as useShortener } from '@hooks/useShortener';
import { ChangeEventHandler, useState } from 'react';

type LinkInputProps = { disabled: boolean };

const LinkInput = ({ disabled }: LinkInputProps) => {
  const { setLink } = useShortener();
  const [isValid, setIsValid] = useState<boolean>();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.target.value !== ''
      ? isValidLink(event.target.value)
        ? (setLink(
            event.target.value.startsWith('http://') ||
              event.target.value.startsWith('https://')
              ? event.target.value
              : `https://${event.target.value}`
          ),
          setIsValid(true))
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
    <div className='relative w-full form-control'>
      <div className='absolute top-0 bottom-0 w-5 h-5 my-auto left-4'>
        <LinkIcon className='w-5 h-5 text-base-500' />
      </div>
      <input
        disabled={disabled}
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

const inputCommonStyles = 'w-full input input-bordered pl-11';

const inputStyles = {
  neutral: `${inputCommonStyles}`,
  valid: `input-success ${inputCommonStyles}`,
  invalid: `input-error ${inputCommonStyles}`,
};

export default LinkInput;
