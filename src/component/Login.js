

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Hader from './Hader';
import { Button } from 'react-bootstrap'
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function login() {
    console.log();
    let item = {email, password }
  }

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userInf")) {
      navigate('/add');
    }
  }, [])
  return (
    <div>
      <Hader />
      <h1>Login Page</h1>
      <div className='col-sm-3 offset-sm-4'>
        <input
          type="text" className='form-control'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password" className='form-control'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
       
         <button className='btn btn-primary' onClick={login}>login</button>
      </div>
    </div>
  )
}

export default Login
