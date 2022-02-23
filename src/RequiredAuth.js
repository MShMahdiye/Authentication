import React, {useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import {authContext} from './Context'
// import {useAuth} from './Context';

function RequiredAuth({children}) {
  const {authed} = useContext(authContext);
  const Location = useLocation();
  return authed == true ? children : <Navigate to="/login" replace state={{path: Location.pathname}}/> ;
}

export default RequiredAuth;
