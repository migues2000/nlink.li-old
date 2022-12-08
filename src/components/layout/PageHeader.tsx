import { Grid, GridItem, Heading } from '@chakra-ui/react';

const PageHeader = () => {
  return (
    <Grid
      as='header'
      width='100%'
      gridTemplateColumns='1fr 2fr 1fr'
      gap='6'
      padding='4'
    >
      <GridItem width='100%'></GridItem>
      <GridItem width='100%' textAlign='center'>
        <Heading>Nano Link</Heading>
      </GridItem>
      <GridItem width='100%'></GridItem>
    </Grid>
  );
};

export default PageHeader;
