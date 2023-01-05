import React, { Fragment } from 'react';
import { Navigate, renderMatches, useNavigate } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
import {render} from 'react-dom';
import "./leaderboard.css";
import axios from 'axios'; 
import { useEffect,useState } from 'react'; 


export default function ResultComponent(props)
{

    const navigate= useNavigate();
   
   
  return (

    <tbody>
    <tr>
      <td>{props.questnum}</td>
      <td>{props.time}</td>
      <td>
        <div class="result-box">{props.passed}</div>
      </td>
    </tr>
   
    </tbody>
 
        
    )
    
}