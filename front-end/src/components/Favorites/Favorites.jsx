import React, { useState } from 'react';
import Header from '../Header/Header';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';

import { Container, SimpleGrid } from '@chakra-ui/react';

const Favorites = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || [],
  );
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <Header />
      {isLoading && <Loading />}
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
