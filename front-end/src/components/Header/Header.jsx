import React from 'react';
import {
  Box,
  Heading,
  Flex,
  Spacer,
  Button,
  Container,
} from '@chakra-ui/react';

const Header = () => {
  return (
    <Box background='#7f8c8d'>
      <Container maxW='container.lg' p='6'>
        <Flex align='center'>
          <Box p='2'>
            <Heading size='lg' color='#fff'>
              NERDVEL
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Button colorScheme='red' mr='4'>
              Characters
            </Button>
            <Button colorScheme='red' mr='4'>
              Comics
            </Button>
            <Button colorScheme='red'>Log in</Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
