import React from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';

import { Container, SimpleGrid } from '@chakra-ui/react';

const Characters = () => {
  const isMarked = false;
  return (
    <div>
      <Header />
      <Container maxW='container.lg' p='6'>
        <SimpleGrid columns={3} spacing={10}>
          <Card />
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Characters;
