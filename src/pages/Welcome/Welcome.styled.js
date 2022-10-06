import styled from 'styled-components';
import { pxToRem } from 'utils/calcRem';
import img from '../../people.jpg';

export const WelcomeHero = styled.div`
  max-width: 95%;
  height: ${pxToRem(300)}rem;
  border-radius: ${pxToRem(20)}rem;
  background-image: url(${img});
  background-position: center;
  margin: auto;
  margin-top: ${pxToRem(20)}rem;
  display: flex;
  & div {
    margin-top: 180px;
    box-sizing: border-box;
    height: 100px;
  }
  & h1 {
    font-family: 'Syncopate', sans-serif;
    font-weight: 900;
    color: #fff;
    text-shadow: ${pxToRem(2)}rem ${pxToRem(2)}rem ${pxToRem(5)}rem #000;
    font-size: ${pxToRem(30)}rem;
    line-height: 50px;
    margin: 0;
    display: inline-block;

    ::first-letter {
      font-size: ${pxToRem(150)}rem;
      font-weight: 400;
      margin-right: ${pxToRem(-90)}rem;
    }
  }
  & p {
    margin: 0;
    padding-left: 100px;
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 700;
    color: #fff;
    text-shadow: ${pxToRem(2)}rem ${pxToRem(2)}rem ${pxToRem(5)}rem #000;
  }
  & h2 {
    font-family: 'Syncopate', sans-serif;
    font-weight: 700;
    font-size: ${pxToRem(50)}rem;
    color: #fff;
    display: inline-block;
    margin-top: 220px;
    text-shadow: ${pxToRem(2)}rem ${pxToRem(2)}rem ${pxToRem(5)}rem #000;
    ::first-letter {
      font-size: ${pxToRem(70)}rem;
      font-weight: 700;
    }
  }
`;
export const AboutContainer = styled.div`
  max-width: 95%;
  height: ${props => (props.show ? `${pxToRem(300)}rem` : `${pxToRem(70)}rem`)};
  border-radius: ${pxToRem(20)}rem;
  background-color: #fff;
  margin: auto;
  margin-top: ${pxToRem(20)}rem;
  position: relative;
  & h3 {
    line-height: ${pxToRem(70)}rem;
    font-family: 'Syncopate', sans-serif;
    font-weight: 900;
    font-size: ${pxToRem(20)}rem;
    padding-left: ${pxToRem(20)}rem;
  }
  & img {
    position: absolute;
    top: ${props => (props.show ? '5%' : '35%')};
    right: 2%;
    width: 20px;
    height: 20px;
  }
  & p {
    margin-top: 0;
    font-family: 'Red Hat Display', sans-serif;
    font-size: ${pxToRem(20)}rem;
    padding-left: ${pxToRem(20)}rem;
  }
`;
