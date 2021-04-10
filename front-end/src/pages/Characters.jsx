import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';

import { fetchResponseByType } from '../services/apiMarvel';

import { Container, SimpleGrid } from '@chakra-ui/react';

const Characters = () => {
  const [heros, setHeros] = useState([]);
  useEffect(() => {
    fetchResponseByType('characters').then(({ data: { data: { results } } }) =>
      setHeros(results),
    );
  }, []);

  return (
    <div>
      <Header />
      <Container maxW='container.lg' p='6'>
        <SimpleGrid columns={3} spacing={10}>
          {heros.map((hero) => (
            <Card info={hero} key={hero.id} />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Characters;
