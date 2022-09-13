import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { UserMenuContainer, Button } from './UserMenu.styled';

export default function UserMenu() {
  const { name } = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  return (
    <UserMenuContainer>
      <span>Hello, {name}</span>
      <Button type="button" onClick={() => dispatch(authOperations.logout())}>
        Log out
      </Button>
    </UserMenuContainer>
  );
}
