import { Container, Heading, Link, Stack } from '@chakra-ui/react';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Container>
      <Stack alignItems="center">
        <Heading mt="10" mb="20">
          Welcome 👋 to the Echo
        </Heading>
        <Link href="http://localhost:3000/">Try it now!</Link>
      </Stack>
    </Container>
  );
};

export default App;
