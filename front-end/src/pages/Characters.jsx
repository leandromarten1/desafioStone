import React from 'react';
import Header from '../components/Header/Header';

import { Container, SimpleGrid, Box, Image, Flex } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const Characters = () => {
  const isMarked = false;
  return (
    <div>
      <Header />
      <Container maxW='container.lg' p='6'>
        <SimpleGrid columns={3} spacing={10}>
          <Box overflow='hidden' borderWidth='1px' bg='#fff'>
            <Image src='https://picsum.photos/300/300' alt='name character' />
            <Flex p='6' directon='row' justify='space-between' align='center'>
              Name Character
              <StarIcon h='5' w='5' color={isMarked ? 'red' : '#ccc'} />
            </Flex>
          </Box>
          <Box overflow='hidden' borderWidth='1px' bg='#fff'>
            <Image src='https://picsum.photos/300/300' alt='name character' />
            <Flex p='6' directon='row' justify='space-between' align='center'>
              Name Character
              <StarIcon h='5' w='5' color={isMarked ? 'red' : '#ccc'} />
            </Flex>
          </Box>
          <Box overflow='hidden' borderWidth='1px' bg='#fff'>
            <Image src='https://picsum.photos/300/300' alt='name character' />
            <Flex p='6' directon='row' justify='space-between' align='center'>
              Name Character
              <StarIcon h='5' w='5' color={isMarked ? 'red' : '#ccc'} />
            </Flex>
          </Box>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Characters;
