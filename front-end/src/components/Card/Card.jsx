import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, Image, Flex } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const Card = ({ info }) => {
  const isMarked = false;
  const [star, setStar] = useState(
    JSON.parse(localStorage.getItem('favorites')) || [],
  );
  const { id, name, thumbnail, title } = info;

  const addFavorite = ({ id }) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some((fav) => fav === id)) {
      favorites.push(id);
    } else {
      favorites.splice(favorites.indexOf(id), 1);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    setStar(favorites);
  };

  return (
    <Box overflow='hidden' borderWidth='1px' bg='#fff'>
      <Link to={name ? `/characters/${id}` : `/comics/${id}`}>
        {console.log('favoritos state:', star)}
        <Image
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={`Image ${name}`}
          boxSize='300px'
        />
      </Link>
      <Box bg='red' h={1} w='100%'></Box>
      <Flex p='6' directon='row' justify='space-between' align='center'>
        <Link to='#'>{name || title}</Link>
        <StarIcon
          h='5'
          w='5'
          color={star.includes(id) ? 'red' : '#ccc'}
          onClick={() => addFavorite(info)}
        />
      </Flex>
    </Box>
  );
};

export default Card;
