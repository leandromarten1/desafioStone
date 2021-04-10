import React from 'react';

import { Box, Image, Flex } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const Card = ({ info }) => {
  const isMarked = false;
  const { name, thumbnail, title } = info;
  return (
    <Box overflow='hidden' borderWidth='1px' bg='#fff'>
      <Image
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={`Image ${name}`}
        boxSize='300px'
      />
      <Box bg='red' h={1} w='100%'></Box>
      <Flex p='6' directon='row' justify='space-between' align='center'>
        {name || title}
        <StarIcon h='5' w='5' color={isMarked ? 'red' : '#ccc'} />
      </Flex>
    </Box>
  );
};

export default Card;
