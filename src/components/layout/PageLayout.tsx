import { default as Head } from 'next/head';
import { default as PageFooter } from './PageFooter';
import { default as PageHeader } from './PageHeader';
import { Container, VStack } from '@chakra-ui/react';

type PageLayoutProps = { children: React.ReactNode; title: string };

const PageLayout = ({ children, title }: PageLayoutProps) => {
  return (
    <VStack width='100%' height='100%'>
      <Head>
        <title>{title}</title>
      </Head>
      <PageHeader />
      <Container as='main' flex={1} centerContent justifyContent='center'>
        {children}
      </Container>
      <PageFooter />
    </VStack>
  );
};

export default PageLayout;
