import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Input, CustomForm, Error, Wrapper, Button } from './Login.styled';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

let signUpSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(16).required(),
});
const initialState = {
  email: '',
  password: '',
};
export default function Login() {
  const dispatch = useDispatch();
  function handleSubmit(values, { resetForm }) {
    dispatch(authOperations.login(values));
    resetForm();
  }
  return (
    <Wrapper>
      <Formik
        initialValues={initialState}
        validationSchema={signUpSchema}
        onSubmit={handleSubmit}
      >
        <CustomForm>
          <h3>Login</h3>
          <label>
            <Input
              type="text"
              name="email"
              autoComplete="off"
              placeholder="Email"
            />
            <Error name="email" component="div" />
          </label>
          <label>
            <Input
              type="password"
              name="password"
              autoComplete="off"
              placeholder="Password"
            />
            <Error name="password" component="div" />
          </label>
          <Button type="submit">Login</Button>
        </CustomForm>
      </Formik>
    </Wrapper>
  );
}
