import React from 'react';
import { ButtonGroup, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';
import firbaseInitialize from '../../FIREBASE/firebase.init';
import './Login.css'
firbaseInitialize()

const Login = () => {
  const {user,signInGoogle,handleNewUser,handlePassword,
    handleEmail} = useAuth()
 


    return (
        <div className='py-5'>
          <form onSubmit={handleNewUser} className='mx-5 px-5 mt-5 py-5 '>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label text-light">Email</label>
    <div className="col-sm-10">
      <input type="email" required onBlur={handleEmail}  placeholder='Your Email' className="form-control w-75" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label text-light">Password</label>
    <div className="col-sm-10">
      <input type="password" required onBlur={handlePassword} placeholder='Your Password' className="form-control w-75" id="inputPassword3"/>
    </div>
  </div>
 
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>
     
      <div className='mb-5'>
      <a className='mb-3 text-success ' onClick={signInGoogle}> Sign in with Google</a>
      </div>
        </div>
  

    );
};

export default Login;