import React from 'react';
import { ButtonGroup, Form } from 'react-bootstrap';
import useFirebase from '../../../hooks/useFirebase';
import firbaseInitialize from '../../FIREBASE/firebase.init';
import './Login.css'
firbaseInitialize()

const Login = () => {
  const {user,signInGoogle} = useFirebase()
  console.log(user)


    return (
        <div>
          {/* <Form className='m-5 p-5'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='text-light'>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='text-light'>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check className='text-light' type="checkbox" label="Already Exist?" />
  </Form.Group>
  
  <ButtonGroup variant="primary" className='bg-warning p-2 rounded mt-2' type="submit">
    Log In
  </ButtonGroup>
</Form> */}


    <button onClick={signInGoogle}> Sign in with Google</button>
        </div>
  

    );
};

export default Login;