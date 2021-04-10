import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Loading from '../components/Loading/Loading';

import { Container, SimpleGrid } from '@chakra-ui/react';

const Details = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <Header />
      {isLoading && <Loading />}
      <Container maxW='container.lg' p='6'></Container>
    </div>
  );
};

export default Details;
