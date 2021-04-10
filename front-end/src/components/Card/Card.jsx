import React from 'react';

import { Box, Image, Flex } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const Card = () => {
  const isMarked = false;
  return (
    <Box overflow='hidden' borderWidth='1px' bg='#fff'>
      <Image src='https://picsum.photos/300/300' alt='name character' />
      <Flex p='6' directon='row' justify='space-between' align='center'>
        Name Character
        <StarIcon h='5' w='5' color={isMarked ? 'red' : '#ccc'} />
      </Flex>
    </Box>
  );
};

export default Card;
