import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Input, CustomForm, Error, Button } from './Registration.styled';
import authOperations from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

let signUpSchema = yup.object().shape({
  name: yup.string().max(16).required(),
  email: yup.string().email().required(),
  password: yup.string().min(7).max(16).required(),
});
const initialState = {
  name: '',
  email: '',
  password: '',
};
export default function Registration() {
  const dispatch = useDispatch();
  function handleSubmit(values, { resetForm }) {
    dispatch(authOperations.register(values));
    resetForm();
  }
  return (
    <div>
      <Formik
        initialValues={initialState}
        validationSchema={signUpSchema}
        onSubmit={handleSubmit}
      >
        <CustomForm>
          <h3>Sign Up</h3>
          <label>
            <Input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Name"
            />
            <Error name="name" component="div" />
          </label>
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
          <Button type="submit">Sign Up</Button>
        </CustomForm>
      </Formik>
    </div>
  );
}
