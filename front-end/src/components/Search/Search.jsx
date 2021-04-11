import React from 'react';

import { Container, Flex, Input, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Search = ({ handleChange, handleSubmit }) => {
  return (
    <Container maxW='container.lg' p='6'>
      <Flex>
        <Input
          placeholder='Search for Characters by name'
          onChange={handleChange}
          name='inputField'
        />

        <IconButton
          aria-label='Search'
          icon={<SearchIcon />}
          onClick={handleSubmit}
        />
      </Flex>
    </Container>
  );
};

export default Search;
