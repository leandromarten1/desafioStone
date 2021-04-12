import React from 'react';
import Header from '../Header/Header';
import Card from '../Card/Card';

import { saveFavorites } from '../../services/api';

import { Container, SimpleGrid, Heading, Button, Flex } from '@chakra-ui/react';

import { getUser, getToken } from '../../utils/handleStorage';

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  const token = getToken();
  const user = getUser();

  const save = async (id, favorites, token) => {
    const response = await saveFavorites(id, favorites, token);
    console.log(response);
  };

  return (
    <div>
      <Header />
      <Container maxW='container.lg' p='6'>
        <Flex justify='space-between'>
          <Heading as='h2' size='xl' mb='4'>
            Your favorites Comics and Characters:
          </Heading>
          {favorites.length > 0 && (
            <Button onClick={() => save(user.id, favorites, token)} bg='#ccc'>
              Save favorites
            </Button>
          )}
        </Flex>
        {favorites.length < 1 && 'No Results'}
        <SimpleGrid columns={3} spacing={10}>
          {favorites.map((hero) => (
            <Card info={hero} key={hero.id} />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Favorites;
