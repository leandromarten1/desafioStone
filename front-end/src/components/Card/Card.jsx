import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, Image, Flex } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const Card = ({ info }) => {
  const [isMarked, setIsMarked] = useState(
    JSON.parse(localStorage.getItem('favorites')) || [],
  );
  const { id, name, thumbnail, title } = info;

  const addFavorite = (id, name, title, thumbnail) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some((fav) => fav.id === id)) {
      favorites.push({ id, name, title, thumbnail });
      setIsMarked(favorites);
    } else {
      favorites = favorites.filter((fav) => fav.id !== id);
      setIsMarked(favorites);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const favs = (id) => {
    return isMarked.some((e) => e.id === id);
  };

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
        <Link to={name ? `/characters/${id}` : `/comics/${id}`}>
          {name || title}
        </Link>
        <StarIcon
          h='5'
          w='5'
          color={favs(id) ? 'red' : '#ccc'}
          onClick={() => addFavorite(id, name, title, thumbnail)}
        />
      </Flex>
    </Box>
  );
};

export default Card;
