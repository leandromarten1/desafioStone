import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Loading from '../components/Loading/Loading';

import { fetchById } from '../services/apiMarvel';
import getResourceId from '../utils/getResourceId';

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

const ComicDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetchById('comics', id).then((res) => {
      setDetails(res.results[0]);
      setIsLoading(false);
    });
  }, [id]);

  const { title, thumbnail, description, characters } = details;
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
                alt={`Image ${title}`}
                boxSize='300px'
                border='1px'
              />
            </Box>
            <Spacer />
            <Box w='70%'>
              <Text fontSize='4xl' mb={4}>
                {title}
              </Text>

              <Text mb={4}>
                {description ? description : 'This Comic has no description.'}
              </Text>
              <Text fontSize='2xl' mb={4}>
                Characters:
              </Text>
              <UnorderedList>
                {characters.items.length === 0 ? (
                  <ListItem>No results</ListItem>
                ) : (
                  characters.items.map((char) => (
                    <ListItem key={char.id}>
                      <Link
                        to={`/characters/${getResourceId(
                          char.resourceURI,
                          'characters',
                        )}`}
                      >
                        {char.name}
                      </Link>
                    </ListItem>
                  ))
                )}
              </UnorderedList>
            </Box>
          </Flex>
        </Container>
      )}
    </div>
  );
};

export default ComicDetails;
