import React from 'react';
import { Navigate, renderMatches, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';

import Home from './Home';
import Axios from 'axios';
import "./login.css";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import {render} from 'react-dom';

export default function Login()
{

    const navigate= useNavigate();
    const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

    const submitHandler=async(e)=>{
        e.preventDefault();
        try{
          const {data}=await Axios.post('/api/users/signin',{
            email,
            password
          });
          console.log(data)
          navigate(`/home/${data.name}`);
        }
        catch(err){
          console.log(err);
        }
        
      }
      
          
    
   
  return (

    
    <div className="login-container">
    <form className="form-1" onSubmit={submitHandler}>
      <h1>Login</h1>
      <label for="email">Email</label>
      <input type="email" name="email" id="email"  required onChange={(e)=>setEmail(e.target.value)}/>
      <label for="password">Password</label>
      <input type="password" name="password" id="password"  required onChange={(e)=>setPassword(e.target.value)}/>
      <span>Forgot Password?</span>
      <button type="submit">Login</button>
    </form>
    
    </div> 
    

     
    )
    
}