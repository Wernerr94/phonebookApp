import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, StyledLink, NavTag } from './Navigation.styled';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';

export default function Navigation() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      <Header>
        <NavTag>
          <StyledLink to="/">Home</StyledLink>
          {isLoggedIn && <StyledLink to="/contacts">My Contacts</StyledLink>}
        </NavTag>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <NavTag>
            <StyledLink to="/register">Register</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
          </NavTag>
        )}
      </Header>
      <Outlet />
    </>
  );
}
