import React from 'react';
import { Container, Spinner, Flex, Box, Text } from '@chakra-ui/react';

import randomPhrase from '../../utils/phrasesLoading';

const Loading = () => {
  const { phrase, author } = randomPhrase();
  return (
    <Container maxW='container.lg' p='6'>
      <Flex direction='column' align='center'>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='red'
          size='xl'
        />
      </Flex>
      <Box mt={10}>
        <Text fontSize='xl'>"{phrase}"</Text>
        <Text as='em'>- {author}</Text>
      </Box>
    </Container>
  );
};

export default Loading;
