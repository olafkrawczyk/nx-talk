import { Container, Stack, Text } from '@chakra-ui/react';

export const UiFooter = () => {
  return (
    <Stack alignSelf="center" pb={16}>
      <Container>
        <Text textAlign="center" fontSize="sm" color="silver">
          Copyrights © The Echo 2023
        </Text>
      </Container>
    </Stack>
  );
};

export default UiFooter;
