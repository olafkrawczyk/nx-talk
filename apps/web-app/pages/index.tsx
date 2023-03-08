import { Container, Heading, Link, Stack } from '@chakra-ui/react';
import { isOdd } from '@nx-sample/is-odd';
import { FC } from 'react';

const App: FC = () => {
  const welcomeIcon = isOdd(new Date().getMinutes()) ? '👋' : '🎉';

  return (
    <Container>
      <Stack alignItems="center">
        <Heading mt="10" mb="20">
          Welcome {welcomeIcon} to the Echo
        </Heading>
        <Link href="http://localhost:3000/">Try it now!</Link>
      </Stack>
    </Container>
  );
};

export default App;
