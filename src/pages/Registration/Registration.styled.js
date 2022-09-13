import styled from 'styled-components';
import { pxToRem } from 'utils/calcRem';
import { size } from 'utils/sizes';
import { Form, Field, ErrorMessage } from 'formik';

export const CustomForm = styled(Form)`
  max-width: ${pxToRem(300)}rem;
  height: ${pxToRem(400)}rem;
  margin: auto;
  margin-top: ${pxToRem(20)}rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: ${pxToRem(15)}rem;
  box-shadow: ${pxToRem(20)}rem ${pxToRem(20)}rem ${pxToRem(50)}rem
    rgba(0, 0, 0, 0.3);
  & label {
    margin-bottom: ${pxToRem(25)}rem;
    position: relative;
  }
`;

export const Input = styled(Field)`
  font-size: ${pxToRem(size('md'))}rem;
  border-bottom: ${pxToRem(2)}rem solid rgba(233, 233, 233, 0.5);
  background-color: rgba(233, 233, 233, 0.5);
  max-width: ${pxToRem(200)}rem;

  border: 0;
  border-radius: 0;
  border-bottom: ${pxToRem(1)}rem solid rgba(0, 0, 0, 0.1);

  &::placeholder {
    font-size: ${pxToRem(size('sm'))}rem;
    font-style: italic;
    font-weight: 200;
  }
  &:focus {
    outline: 0;
    border-radius: 0;
    background-color: rgba(233, 233, 233, 0.5);
  }
`;
export const Error = styled(ErrorMessage)`
  position: absolute;
  top: ${pxToRem(30)}rem;
  font-size: ${pxToRem(size('xs'))}rem;
  font-style: italic;
  color: #f03;
`;
export const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #dcecfb;
  background: linear-gradient(to bottom, #b6ccfe 5%, #80b5ea 100%);
  background-color: #b6ccfe;
  border-radius: 6px;
  border: 1px solid #84bbf3;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  padding: 5px 20px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #528ecc;
  &:hover {
    background: linear-gradient(to bottom, #80b5ea 5%, #b6ccfe 100%);
    background-color: #80b5ea;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
