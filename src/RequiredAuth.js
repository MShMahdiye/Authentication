import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {useAuth} from './Context';

function RequiredAuth({children}) {
  const {authed} = useAuth();
  const Location = useLocation();
  return authed == true ? children : <Navigate to="/login" replace state={{path: Location.pathname}}/> ;
}

export default RequiredAuth;
