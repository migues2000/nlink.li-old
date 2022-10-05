import { Button, Text, VStack } from '@chakra-ui/react';

type SensitiveContentWarningProps = { onConcern: () => void };

const SensitiveContentWarning = ({
  onConcern,
}: SensitiveContentWarningProps) => {
  return (
    <VStack spacing='4'>
      <Text align='center'>
        The following content has been marked as <strong>sensitive</strong>.
      </Text>
      <Text align='center'>
        This means that it could contain <strong>violence</strong>,{' '}
        <strong>drugs</strong>, <strong>nudity</strong>, etc.
      </Text>
      <Button onClick={onConcern} colorScheme='red'>
        Continue Anyways
      </Button>
    </VStack>
  );
};

export default SensitiveContentWarning;
