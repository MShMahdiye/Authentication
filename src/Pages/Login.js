import React, { useContext } from "react";

import { useNavigate,useLocation } from "react-router-dom";
import { authContext } from "../Context";
// import { authContext } from '../Context'


const Login = () => {
  const navigate = useNavigate();
  const {state} = useLocation();

  const { login } = useContext(authContext);
  
  const handleLogin = () => {
    login().then(
      () => {
        // navigate("/dashboard")
        navigate(state ?.path || "/dashboard");
        // navigate(state && state.path ? state.path : "/dashboard")
      }
    )
  }
  // console.log(state)
  // console.log(state.path)
  console.log("login :: ",authContext);

  return(
    <div>
      <h1>login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login;