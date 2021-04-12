import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to='/'>
              <Heading size='lg' color='#fff'>
                NERDVEL
              </Heading>
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Link to='/characters'>
              <Button colorScheme='red' mr='4'>
                Characters
              </Button>
            </Link>
            <Link to='/comics'>
              <Button colorScheme='red' mr='4'>
                Comics
              </Button>
            </Link>
            <Link to='/login'>
              <Button colorScheme='red'>Login</Button>
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
