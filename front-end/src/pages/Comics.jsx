import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import Loading from '../components/Loading/Loading';
import Search from '../components/Search/Search';

import { fetchByType, fetchByName } from '../services/apiMarvel';

import { Container, SimpleGrid } from '@chakra-ui/react';

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetchByType('comics').then((res) => {
      setComics(res.results);
      setIsLoading(false);
    });
  }, []);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    await fetchByName('comics', input).then((res) => {
      setComics(res.results);
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
          {comics.map((comic) => (
            <Card info={comic} key={comic.id} />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Comics;
