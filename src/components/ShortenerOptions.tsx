import {
  Center,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import { default as useShortener } from '@hooks/useShortener';
import { useRef } from 'react';
import { default as PasswordDialog } from './PasswordDialog';
import {
  MdDisabledVisible,
  MdLock,
  MdLockOpen,
  MdMoreVert,
  MdRemoveRedEye,
} from 'react-icons/md';

const ShortenerOptions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<any>();
  const {
    isSensitive,
    markAsSensitive,
    unmarkAsSensitive,
    password,
    removePassword,
  } = useShortener();

  return (
    <>
      <PasswordDialog isOpen={isOpen} onClose={onClose} cancelRef={cancelRef} />
      <Menu isLazy>
        <MenuButton>
          <Icon
            as={MdMoreVert}
            marginTop='1.5'
            width='5'
            height='5'
            color='gray.400'
          />
        </MenuButton>
        <MenuList>
          <MenuItem
            icon={
              password ? (
                <Icon as={MdLockOpen} width='4' height='4' color='gray.500' />
              ) : (
                <Icon as={MdLock} width='4' height='4' color='gray.500' />
              )
            }
            onClick={password ? removePassword : onOpen}
          >
            {password ? 'Remove password' : 'Add password'}
          </MenuItem>
          <MenuItem
            icon={
              isSensitive ? (
                <Icon
                  as={MdRemoveRedEye}
                  width='4'
                  height='4'
                  color='gray.500'
                />
              ) : (
                <Icon
                  as={MdDisabledVisible}
                  width='4'
                  height='4'
                  color='gray.500'
                />
              )
            }
            onClick={() =>
              isSensitive ? unmarkAsSensitive() : markAsSensitive()
            }
          >
            {isSensitive ? 'Unmark as sensitive' : 'Mark as sensitive'}
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default ShortenerOptions;
