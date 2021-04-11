import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Loading from '../components/Loading/Loading';

import { fetchById } from '../services/apiMarvel';

import {
  Container,
  Flex,
  Box,
  Image,
  Text,
  Spacer,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';

const CharacterDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetchById('characters', id).then((res) => {
      setDetails(res.results[0]);
      setIsLoading(false);
    });
  }, [id]);

  const { name, thumbnail, description, comics } = details;
  return (
    <div>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <Container maxW='container.lg' p='6'>
          <Flex>
            <Box w='40%'>
              <Image
                src={`${thumbnail.path}.${thumbnail.extension}`}
                alt={`Image ${name}`}
                boxSize='300px'
                border='1px'
              />
            </Box>
            <Spacer />
            <Box w='70%'>
              <Text fontSize='4xl' mb={4}>
                {name}
              </Text>
              <Text mb={4}>{description}</Text>
              <Text fontSize='2xl' mb={4}>
                Comics:
              </Text>
              <UnorderedList>
                {comics.items.map((comic) => (
                  <ListItem key={comic.id}>{comic.name}</ListItem>
                ))}
              </UnorderedList>
            </Box>
          </Flex>
        </Container>
      )}
    </div>
  );
};

export default CharacterDetails;
