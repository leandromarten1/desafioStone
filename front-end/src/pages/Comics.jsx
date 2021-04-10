import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import Loading from '../components/Loading/Loading';

import { fetchResponseByType } from '../services/apiMarvel';

import { Container, SimpleGrid } from '@chakra-ui/react';

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchResponseByType('comics').then(
      ({
        data: {
          data: { results },
        },
      }) => {
        setComics(results);
        setIsLoading(false);
      },
    );
  }, []);

  return (
    <div>
      <Header />
      {isLoading && <Loading />}
      <Container maxW='container.lg' p='6'>
        <SimpleGrid columns={3} spacing={10}>
          {comics.map((comic) => (
            <Card info={comic} key={comic.id} />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Comics;
