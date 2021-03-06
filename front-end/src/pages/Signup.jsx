import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Container,
  Flex,
  Heading,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  Button,
  Text,
} from '@chakra-ui/react';

import { apiSignup } from '../services/api';

const validationSchema = yup.object().shape({
  name: yup.string().required('This field is Required'),
  email: yup.string().email('Invalid Email').required('This field is Required'),
  password: yup.string().required('This field is Required'),
});

const Signup = () => {
  const [message, setMessage] = useState(null);
  const history = useHistory();
  const formik = useFormik({
    onSubmit: async (values, _form) => {
      await apiSignup(values.name, values.email, values.password);
      history.push('/login');
    },
    validationSchema,
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
  });
  return (
    <Container p='6'>
      <Flex flexDirection='column'>
        <Heading mb={8}>Sign up for Nerdvel</Heading>
        {message && <Text>{message}</Text>}
        <FormControl id='name' mb={8} isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type='text'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Your name'
          />
          {formik.touched.name && (
            <FormHelperText textColor='red'>
              {formik.errors.name}
            </FormHelperText>
          )}
        </FormControl>

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
          Create Account
        </Button>
      </Flex>
    </Container>
  );
};

export default Signup;
