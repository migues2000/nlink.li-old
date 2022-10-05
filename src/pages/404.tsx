import { Button, Heading, VStack } from '@chakra-ui/react';
import { default as PageLayout } from '@components/layout/PageLayout';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  return (
    <PageLayout title='Not Found'>
      <VStack spacing='6'>
        <Heading>404 - Not Found</Heading>
        <Button onClick={() => router.push('/')}>Go back to Home</Button>
      </VStack>
    </PageLayout>
  );
};

export default NotFound;
