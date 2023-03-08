import { Container, Heading, Stack } from '@chakra-ui/react';
import { FC, useState } from 'react';
import FormComponent from '../components/FormComponent';
import Responses from '../components/responses/responses';

const Main: FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = async (message: string) => {
    const response = await fetch('http://localhost:3333/api/echo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    setMessages(data.messages);
  };

  return (
    <Container>
      <Stack alignItems="center">
        <Heading mt="10">Echo</Heading>
      </Stack>
      <Stack spacing={20}>
        <FormComponent handleSendMessage={sendMessage} />
        <Responses responses={messages} />
      </Stack>
    </Container>
  );
};

export default Main;
