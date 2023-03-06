import { Container, Heading, Stack } from '@chakra-ui/react';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Container>
      <Stack alignItems="center">
        <Heading>Welcome to the app</Heading>
      </Stack>
    </Container>
  );
};

export default App;
