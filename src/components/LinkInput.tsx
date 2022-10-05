import { default as useShortener } from '@hooks/useShortener';
import { ChangeEventHandler, useState } from 'react';
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import ShortenerOptions from './ShortenerOptions';
import { MdLink } from 'react-icons/md';

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
    <InputGroup>
      <InputLeftElement pointerEvents='none'>
        <Icon color='gray.400' width='5' height='5' as={MdLink} />
      </InputLeftElement>
      <Input
        type='url'
        onChange={handleChange}
        disabled={disabled}
        isInvalid={isValid === false}
      />
      {isValid && (
        <InputRightElement>
          <ShortenerOptions />
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default LinkInput;
