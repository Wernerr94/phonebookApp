import React, { useEffect, lazy, Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../pages/Navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Login = lazy(() => import('../pages/Login/Login'));
const Registration = lazy(() => import('../pages/Registration/Registration'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Welcome = lazy(() => import('pages/Welcome/Welcome'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(state => state.auth.isFetching);
  useEffect(() => {
    dispatch(authOperations.getUserInfo());
  }, [dispatch]);

  return (
    <div className="container">
      {!isFetchingUser && (
        <>
          <Navigation />
          <Suspense fallback={<div>...Loading</div>}>
            <Routes>
              <Route path="/" element={<Welcome />} />
              {/* LIMITED ROUTES */}
              <Route
                path="/login"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute redirectTo="/" restricted>
                    <Registration />
                  </PublicRoute>
                }
              />

              {/* PRIVATE ROUTES */}
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <Contacts />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </>
      )}
    </div>
  );
}
