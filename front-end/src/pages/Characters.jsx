import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import Loading from '../components/Loading/Loading';

import { fetchByType } from '../services/apiMarvel';

import { Container, SimpleGrid } from '@chakra-ui/react';

const Characters = () => {
  const [heros, setHeros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchByType('characters').then((res) => {
      setIsLoading(false);
      setHeros(res.results);
    });
  }, []);

  return (
    <div>
      <Header />
      {isLoading && <Loading />}
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
