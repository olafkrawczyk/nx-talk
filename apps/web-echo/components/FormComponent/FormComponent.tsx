import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { FC, FormEvent, useState } from 'react';

type FormComponentProps = {
  handleSendMessage: (message: string) => void;
};

export const FormComponent: FC<FormComponentProps> = ({
  handleSendMessage,
}) => {
  const [text, setText] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSendMessage(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <FormControl id="text">
          <FormLabel>Message</FormLabel>
          <Input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </FormControl>
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};
