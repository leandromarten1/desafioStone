import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Box,
  Heading,
  Flex,
  Spacer,
  Button,
  Container,
} from '@chakra-ui/react';

import { getUser, clearStorage } from '../../utils/handleStorage';

const Header = () => {
  const history = useHistory();
  const isLogged = getUser();
  const handleLogout = () => {
    clearStorage();
    history.push('/');
  };
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
            {isLogged ? (
              <>
                <Link to='/favorites'>
                  <Button colorScheme='red' mr='4'>
                    My favorites
                  </Button>
                </Link>
                <Link to='/my'>
                  <Button colorScheme='red' mr='4'>
                    My account
                  </Button>
                </Link>
                <Button onClick={handleLogout} colorScheme='red'>
                  Logout
                </Button>
              </>
            ) : (
              <Link to='/login'>
                <Button colorScheme='red'>Login</Button>
              </Link>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
