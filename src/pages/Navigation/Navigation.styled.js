import styled from 'styled-components';
import { pxToRem } from 'utils/calcRem';
// import { size } from 'utils/sizes';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: ${pxToRem(20)}rem;
  background-color: #b6ccfe;
`;

export const NavTag = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'Red Hat Display', sans-serif;
  color: #fff;
  font-weight: 700;
  border-bottom: 2px;
  border-bottom-style: solid;
  border-color: #b6ccfe;
  padding-bottom: 5px;
  &:first-child {
    margin-right: ${pxToRem(20)}rem;
  }
`;
