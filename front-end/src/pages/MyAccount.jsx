import React from 'react';
import Header from '../components/Header/Header';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { getUser, getToken } from '../utils/handleStorage';
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

import { updateUser } from '../services/api';

const validationSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email('Invalid Email'),
  newPassword: yup.string(),
  password: yup.string().required('This field is Required'),
});

const MyAccount = () => {
  const user = getUser();
  const token = getToken();
  const formik = useFormik({
    onSubmit: async (values, _form) => {
      const pwd = values.newPassword || values.password;
      const { data } = await updateUser(
        user.id,
        values.name,
        values.email,
        pwd,
        token,
      );
      console.log(data);
    },
    validationSchema,
    initialValues: {
      name: user.name,
      email: user.email,
      newPassword: '',
      password: '',
    },
  });
  return (
    <div>
      <Header />
      <Container p='6'>
        <Flex flexDirection='column'>
          <Heading mb={8}>My Account</Heading>
          <FormControl id='name' mb={8}>
            <FormLabel>Name</FormLabel>
            <Input
              type='text'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && (
              <FormHelperText textColor='red'>
                {formik.errors.name}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl id='email' mb={8}>
            <FormLabel>Email</FormLabel>
            <Input
              type='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && (
              <FormHelperText textColor='red'>
                {formik.errors.email}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl id='newPassword' mb={8}>
            <FormLabel>New Password</FormLabel>
            <Input
              type='password'
              value={formik.values.NewPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder='Your new password'
            />
            {formik.touched.newPassword && (
              <FormHelperText textColor='red'>
                {formik.errors.newPassword}
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
            Update user
          </Button>
        </Flex>
      </Container>
    </div>
  );
};

export default MyAccount;
