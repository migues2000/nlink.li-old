import { Grid, GridItem, Link, Text } from '@chakra-ui/react';

const PageFooter = () => {
  return (
    <Grid as='footer' width='100%' gap='6' padding='4'>
      <GridItem width='100%' textAlign='center'>
        <Text>
          Made with &hearts; by{' '}
          <Link
            color='teal.500'
            rel='noreferrer'
            target='_blank'
            href='https://github.com/migues2000'
            isExternal
          >
            @migues2000
          </Link>
        </Text>
      </GridItem>
    </Grid>
  );
};

export default PageFooter;
