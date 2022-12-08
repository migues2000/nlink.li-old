import { default as LinkInput } from '@components/LinkInput';
import { default as useShortener } from '@hooks/useShortener';
import { useState } from 'react';
import {
  Button,
  Heading,
  HStack,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';

const Shortener = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');
  const [result, setResult] = useState<string>();
  const { link, shorten } = useShortener();

  const toast = useToast();

  const handleClick = async () => {
    setStatus('loading');
    await shorten()
      .then((result) => {
        toast({ title: 'Succesufully shortened', status: 'success' });
        setStatus('done');
        setResult(result);
      })
      .catch(
        () => (
          setStatus('idle'),
          toast({ title: 'Something went wrong', status: 'error' })
        )
      );
  };

  return (
    <>
      {status === 'idle' || status === 'loading' ? (
        <VStack spacing='4' width={320}>
          <LinkInput disabled={status === 'loading'} />
          <Button
            isLoading={status === 'loading'}
            loadingText='Shortening...'
            disabled={link ? false : true}
            onClick={handleClick}
            width='70%'
            colorScheme='teal'
            marginTop='1.4rem'
          >
            Shorten
          </Button>
        </VStack>
      ) : (
        <VStack spacing='2'>
          <Heading size='sm' color='gray.500'>
            Your shortened link is ready
          </Heading>
          <Text fontSize='4xl'>{result}</Text>
          <HStack spacing='2'>
            <Button onClick={() => setStatus('idle')}>Shorten Another</Button>
            <Button
              onClick={() =>
                navigator.clipboard
                  .writeText(result as string)
                  .then(() =>
                    toast({ title: 'Copied to Clipboard', status: 'success' })
                  )
                  .catch(() =>
                    toast({ title: 'Something went wrong', status: 'error' })
                  )
              }
              rightIcon={<CopyIcon />}
            >
              Copy to Clipboard
            </Button>
          </HStack>
        </VStack>
      )}
    </>
  );
};

export default Shortener;
