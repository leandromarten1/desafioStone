import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';

import { fetchResponseByType } from '../services/apiMarvel';

import { Container, SimpleGrid } from '@chakra-ui/react';

const Comics = () => {
  const [heros, setHeros] = useState([]);
  useEffect(() => {
    fetchResponseByType('comics').then(({ data: { data: { results } } }) =>
      console.log(results),
    );
  }, []);

  return (
    <div>
      <Header />
      <Container maxW='container.lg' p='6'>
        <SimpleGrid columns={3} spacing={10}>
          {heros.map((hero) => (
            <Card hero={hero} key={hero.id} />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Comics;
