import { RefObject, useState } from 'react';
import { default as useShortener } from '@hooks/useShortener';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { MdOutlineLock } from 'react-icons/md';

type PasswordDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  cancelRef: RefObject<any>;
};

const PasswordDialog = ({
  isOpen,
  onClose,
  cancelRef,
}: PasswordDialogProps) => {
  const [password, setPassword] = useState('');
  const { addPassword, removePassword } = useShortener();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent width={320}>
          <AlertDialogHeader fontSize='lg' fontWeight='bold' textAlign='center'>
            Add a Password
          </AlertDialogHeader>

          <AlertDialogBody>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <Icon
                  as={MdOutlineLock}
                  width='5'
                  height='5'
                  color='gray.400'
                />
              </InputLeftElement>
              <Input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              width='100%'
              ref={cancelRef}
              onClick={() => (removePassword(), setPassword(''), onClose())}
            >
              Cancel
            </Button>
            <Button
              width='100%'
              colorScheme='teal'
              onClick={() => (
                addPassword(password), setPassword(''), onClose()
              )}
              ml={3}
            >
              Set Password
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default PasswordDialog;
