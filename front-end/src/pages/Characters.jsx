import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import Loading from '../components/Loading/Loading';
import Search from '../components/Search/Search';

import { fetchByType, fetchByName } from '../services/apiMarvel';

import { Container, SimpleGrid } from '@chakra-ui/react';

const Characters = () => {
  const [heros, setHeros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetchByType('characters').then((res) => {
      setHeros(res.results);
      setIsLoading(false);
    });
  }, []);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    await fetchByName('characters', input).then((res) => {
      setHeros(res.results);
      setIsLoading(false);
    });
  };

  return (
    <div>
      <Header />
      {isLoading && <Loading />}
      <Container maxW='container.lg' p='6'>
        <Search handleChange={handleChange} handleSubmit={handleSubmit} />
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
