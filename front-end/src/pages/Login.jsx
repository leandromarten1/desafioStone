import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { apiLogin } from '../services/api';

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

import { getFavorites } from '../utils/handleStorage';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('This field is Required'),
  password: yup.string().required('This field is Required'),
});

const Login = () => {
  const history = useHistory();
  const formik = useFormik({
    onSubmit: async (values, _form) => {
      const { email, password } = values;
      try {
        const { data } = await apiLogin(email, password);
        localStorage.token = JSON.stringify({ data });
        const favorites = getFavorites();
        localStorage.favorites = JSON.stringify(favorites);
        history.push('/');
      } catch (err) {
        console.log(err);
      }
    },
    validationSchema,
    initialValues: {
      email: '',
      password: '',
    },
  });
  return (
    <Container p='6'>
      <Flex flexDirection='column'>
        <Heading mb={8}>Login</Heading>

        <FormControl id='email' mb={8} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='you@domain.com'
          />
          {formik.touched.email && (
            <FormHelperText textColor='red'>
              {formik.errors.email}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl id='password' mb={8} isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Your password'
          />
          {formik.touched.password && (
            <FormHelperText textColor='red'>
              {formik.errors.password}
            </FormHelperText>
          )}
        </FormControl>

        <Button
          mb={4}
          colorScheme='red'
          w='100%'
          onClick={formik.handleSubmit}
          isLoading={formik.isSubmitting}
        >
          Login
        </Button>
        <Link to='/signup'>
          <Button colorScheme='blackAlpha' w='100%'>
            Create Account
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default Login;
