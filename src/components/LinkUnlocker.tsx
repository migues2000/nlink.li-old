import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { MdOutlineLock } from 'react-icons/md';

type LinkUnlockerProps = { id: string };

const LinkUnlocker = ({ id }: LinkUnlockerProps) => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  useEffect(() => {
    setIsValid(undefined);
  }, [password]);

  const router = useRouter();

  const toast = useToast();

  const handleUnlock = async () => {
    setIsLoading(true);
    const result = await fetch('/api/verify-password', {
      method: 'POST',
      body: JSON.stringify({ id, password }),
    });
    if (result.status !== 200)
      return (
        setIsValid(false),
        setIsLoading(false),
        toast({ title: 'Invalid Password', status: 'error' })
      );

    setIsValid(true);
    toast({ title: 'Redirecting...', status: 'loading' });
    router.push(await result.text());
  };

  return (
    <VStack spacing='4'>
      <Text align='center'>This link is protected by a password.</Text>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <Icon as={MdOutlineLock} width='5' height='5' color='gray.400' />
        </InputLeftElement>
        <Input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={isValid === false}
        />
      </InputGroup>
      <Button
        disabled={password.length === 0}
        isLoading={isLoading}
        loadingText='Unlocking...'
        width='70%'
        colorScheme='teal'
        onClick={handleUnlock}
      >
        Unlock
      </Button>
    </VStack>
  );
};

export default LinkUnlocker;
