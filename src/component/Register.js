import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Hader from './Hader';

function Register() {

        const navigate = useNavigate();
        useEffect(() => {
                if (localStorage.getItem("userInf")) {
                        navigate('/add');
                }
        }, [])
        const [name, setName] = useState("");
        const [password, setPassword] = useState("");
        const [email, setEmail] = useState("");
       
        async function signUp() {
                let item = { name, email, password }

                let result = await fetch("http://localhost:3000/RegisterApi", {
                        method: 'post',
                        headers: {
                                "Content-Type": "application/json",
                                "Accept": "application/json"
                        },
                        body: JSON.stringify(item)
                })
                result = await result.json();
                localStorage.setItem("userInf", JSON.stringify(result))
                console.log(result);
                navigate('/add');

        }




        return (<>
        <Hader />
                <div className='col-sm-3 offset-sm-4'>
                        <h1>Register Page</h1>
                        <input type="text"
                                className='form-control'
                                placeholder='name'
                                value={name} onChange={(e) => setName(e.target.value)} />
                        <br />
                        <input type="text"
                                className='form-control'
                                placeholder='Email'
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        <br />
                        <input type="text"
                                className='form-control'
                                placeholder='password'
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        <br />
                        <button onClick={signUp} className='btn btn-primary'>Sign up</button>

                </div></>
        )
}

export default Register
