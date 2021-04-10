import {
  Container,
  Flex,
  Heading,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  Button,
} from '@chakra-ui/react';

const Login = () => {
  return (
    <Container>
      <Flex flexDirection='column'>
        <Heading mb={8}>Login</Heading>

        <FormControl id='email' mb={8}>
          <FormLabel>Email</FormLabel>
          <Input type='email' />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl id='password' mb={8}>
          <FormLabel>Password</FormLabel>
          <Input type='password' />
          <FormHelperText>We'll never share your password.</FormHelperText>
        </FormControl>

        <Button colorScheme='blue' w='100%'>
          Login
        </Button>
      </Flex>
    </Container>
  );
};

export default Login;
