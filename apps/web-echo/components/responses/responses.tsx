import { List, ListIcon, ListItem, Stack } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FC } from 'react';

/* eslint-disable-next-line */
export interface ResponsesProps {
  responses: string[];
}

export const Responses: FC<ResponsesProps> = ({ responses = [] }) => {
  return (
    <Stack>
      <List spacing={3}>
        {responses?.map((r) => (
          <ListItem key={r}>
            <ListIcon as={ChevronRightIcon} color="green.500" />
            {r}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default Responses;
