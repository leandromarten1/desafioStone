import React, { useState } from 'react';
import Header from '../Header/Header';
import Card from '../Card/Card';

import { Container, SimpleGrid } from '@chakra-ui/react';

const Favorites = () => {
  const isLogged = JSON.parse(localStorage.getItem('token'));
  const localFavorites = JSON.parse(localStorage.getItem('favorites'));
  const favorites =
    isLogged.data.userWithoutPassword.favorites || localFavorites;

  return (
    <div>
      <Header />
      <Container maxW='container.lg' p='6'>
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
