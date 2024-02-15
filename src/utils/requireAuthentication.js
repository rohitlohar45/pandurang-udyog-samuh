// RequireAuthentication.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireAuthentication = ({ element, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Route {...rest} element={isAuthenticated ? element : <Navigate to="/login" />} />
  );
};

export default RequireAuthentication;
