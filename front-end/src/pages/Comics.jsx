import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import Loading from '../components/Loading/Loading';
import Search from '../components/Search/Search';

import { fetchByType, fetchByName, fetchMoreData } from '../services/apiMarvel';

import { Container, SimpleGrid } from '@chakra-ui/react';

import InfiniteScroll from 'react-infinite-scroll-component';

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState('');
  const [config, setConfig] = useState({
    len: comics.length,
    offset: 20,
  });

  useEffect(() => {
    fetchByType('comics').then((res) => {
      setComics(res.results);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
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

  const handleMoreData = async () => {
    await fetchMoreData('comics', config.offset).then((res) => {
      setComics([...comics, ...res.results]);
    });
    setConfig({ len: comics.length * 10, offset: config.offset + 20 });
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <Container maxW='container.lg' p='6'>
          <Search
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            resource='comics'
          />
          <InfiniteScroll
            dataLength={config.len}
            next={handleMoreData}
            hasMore={true}
            loader={'loading'}
          >
            <SimpleGrid columns={3} spacing={10}>
              {comics.map((comic) => (
                <Card info={comic} key={comic.id} />
              ))}
            </SimpleGrid>
          </InfiniteScroll>
        </Container>
      )}
    </div>
  );
};

export default Comics;
