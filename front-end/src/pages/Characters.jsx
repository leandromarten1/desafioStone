import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import Loading from '../components/Loading/Loading';
import Search from '../components/Search/Search';

import { fetchByType, fetchByName, fetchMoreData } from '../services/apiMarvel';

import { Container, SimpleGrid } from '@chakra-ui/react';

import InfiniteScroll from 'react-infinite-scroll-component';

const Characters = () => {
  const [heros, setHeros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState('');
  const [config, setConfig] = useState({
    len: heros.length,
    offset: 20,
  });

  useEffect(() => {
    fetchByType('characters').then((res) => {
      setHeros(res.results);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, []);

  const handleMoreData = async () => {
    console.log('requisição: ', config.len);
    await fetchMoreData('characters', config.offset).then((res) => {
      console.log(res.results);
      setHeros([...heros, ...res.results]);
    });
    setConfig({ len: heros.length * 10, offset: config.offset + 20 });
  };

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
        <InfiniteScroll
          dataLength={config.len}
          next={handleMoreData}
          hasMore={true}
          loader={'loading'}
        >
          <SimpleGrid columns={3} spacing={10}>
            {heros.map((hero) => (
              <Card info={hero} key={hero.id} />
            ))}
          </SimpleGrid>
        </InfiniteScroll>
      </Container>
    </div>
  );
};

export default Characters;
