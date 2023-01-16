import React, { Fragment } from 'react';
import { Navigate, renderMatches, useNavigate } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
import {render} from 'react-dom';
import "./leaderboard.css";
import axios from 'axios'; 
import { useEffect,useState } from 'react'; 


export default function OutputComponent(props)
{

    const navigate= useNavigate();
   
   
  return (
    <div>
         <h1>Expected Output:</h1>
         <h3>{props.expectedOutput}</h3>

         <h1>Your Output:</h1>
         <h3>{props.yourOutput}</h3>
    </div>
   
        
    )
    
}
