import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Image, Flex } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const Card = ({ info }) => {
  const isMarked = false;
  const { id, name, thumbnail, title } = info;
  return (
    <Box overflow='hidden' borderWidth='1px' bg='#fff'>
      <Link to={name ? `/characters/${id}` : `/comics/${id}`}>
        <Image
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={`Image ${name}`}
          boxSize='300px'
        />
      </Link>
      <Box bg='red' h={1} w='100%'></Box>
      <Flex p='6' directon='row' justify='space-between' align='center'>
        <Link to='#'>{name || title}</Link>
        <StarIcon h='5' w='5' color={isMarked ? 'red' : '#ccc'} />
      </Flex>
    </Box>
  );
};

export default Card;
