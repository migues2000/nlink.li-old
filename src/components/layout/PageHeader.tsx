import {
  Button,
  GridItem,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  MdFormatListBulleted,
  MdLogout,
  MdOutlineInsertLink,
  MdPerson,
  MdPersonOutline,
} from 'react-icons/md';
import { useUser } from '@auth0/nextjs-auth0';

const PageHeader = () => {
  const { user, isLoading } = useUser();

  return (
    <SimpleGrid as='header' width='100%' columns={[4, 6]} gap='6' padding='4'>
      <Show above='md'>
        <GridItem width='100%' colSpan={2}></GridItem>
      </Show>
      <GridItem
        width='100%'
        justifyContent='center'
        textAlign={['left', 'center']}
        colSpan={2}
      >
        <Heading>Nano Link</Heading>
      </GridItem>
      <GridItem
        width='100%'
        display='flex'
        justifyContent='end'
        alignItems='center'
        colSpan={2}
      >
        {user ? (
          <Menu placement='bottom-end'>
            <MenuButton
              as={Button}
              leftIcon={<Icon as={MdPerson} w='4' h='4' />}
            >
              Account
            </MenuButton>
            <MenuList>
              <MenuItem icon={<Icon as={MdOutlineInsertLink} w='4' h='4' />}>
                My links
              </MenuItem>
              <MenuItem icon={<Icon as={MdPersonOutline} w='4' h='4' />}>
                Profile
              </MenuItem>
              <MenuItem icon={<Icon as={MdFormatListBulleted} w='4' h='4' />}>
                Link in bio
              </MenuItem>
              <MenuItem
                color='red'
                as='a'
                href='/api/auth/logout'
                icon={<Icon as={MdLogout} w='4' h='4' />}
              >
                Log out
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Button
            colorScheme='teal'
            as='a'
            href='/api/auth/login'
            leftIcon={<Icon as={MdPerson} />}
            isLoading={isLoading}
          >
            Log in
          </Button>
        )}
      </GridItem>
    </SimpleGrid>
  );
};

export default PageHeader;
