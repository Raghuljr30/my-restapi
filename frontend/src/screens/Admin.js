import React from 'react';
import { Navigate, renderMatches, useNavigate, useParams } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import axios from 'axios'; 
import Axios from 'axios';

import { useEffect,useState } from 'react';
import {render} from 'react-dom';
import "./compiler.css";
import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import Alert from './Alert';
import CompilerComponent from '../components/CompilerComponent';
import OutputComponent from '../components/OutputComponent';
export default function Compiler()
{
    const navigate= useNavigate();
    const[compile,setCompile]= useState([])
    const params=useParams()
    const id=params.id;
    const [warnings, setWarnings] = useState(0);
    const [code,setCode]=useState([]);
    const [output,setOutput]=useState([])
    
    const submitHandler=async(e)=>{
        e.preventDefault();
        try
        {
          const result=await Axios.post(`/api/users/output/${id}`,{
            code,
          })
          setOutput(result.data);
          console.log(result.data.output);
        }
        catch(err)
        {
            console.log(err);
        }
        
      }
      
     
    function handleVisibilityChange() {
      if (document.hidden) {
        setWarnings((prevWarnings) => prevWarnings + 1);
        alert(`You have been warned ${warnings} times. Do not leave this page!`);
        if (warnings >= 3) {
          window.location.replace('/');
        }
      }
    }
    useEffect(()=>{

        const fetchData=async()=>{
            const result=await axios.get(`/api/users/compile/${id}`);
            setCompile(result.data);
        
        // e.preventDefault();
        // try{
        //   const quest=await Axios.get('/api/users/quest');
        //   const [questobj]=quest.data;
        //   console.log(quest.data)
        //   console.log(questobj);
        //   setQuestion(quest.data)
         
          
        //    navigate(`/home/${params.name}/quest`);
        // }
        // catch(err){
        //   console.log(err);
        // }

        
      };  fetchData();

      window.myTimer();
    // document.addEventListener('visibilitychange', handleVisibilityChange);
    // return () => {
    //   document.removeEventListener('visibilitychange', handleVisibilityChange);
    // };
    
    },[compile],[warnings]);

  


    
  return (
    <div class="wrapper">
    <div class="section">
        <div class="topnav">
            <a href="#home" class="active">Python Evaluator</a>
            <div id="myLinks">
                {/* <a href="/compiler">All</a>
                <a href="/">Question 1</a>
                <a href="/">Question 2</a>
                <a href="/">Question 3</a> */}
                {/* <button type="button" class="quest-btn btn btn-danger" onClick={()=>{navigate(`/compiler/1`)}}>Question 1</button> */}
                 <Link to={`/compiler/1`}>Question 1</Link>
                <Link to={`/compiler/2`}>Question 2</Link>
                <Link to={`/compiler/3`}>Question 3</Link> 
            </div>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <button onClick={window['myFunction']}><i class="fa fa-bars"></i></button> 
            </a>
        </div>
    </div>


    <div class="row">
      
      <div class="column quest1">
      {compile.map((q)=>{
                console.log(q);
            return(
                <CompilerComponent
            qnum={q.qnum}
            questdesc={q.questdesc}
            input1={q.input1}
            output1={q.output2}
            input2={q.input2}
            output2={q.output2}
            constraint1={q.constraint1}
            constraint2={q.constraint2}
            />
            );
        }
           
           

        )}
        

      


      </div>
      <div class="column" >
        <center id="icon-time">
          <i class="fas fa-tachometer-alt" id="icon-space"></i>
          <div  class="mobile-container">
              <div id="clockdiv">
                <div className="inner-clock">
                  <span className="hours" id="hour"></span>
                  <h3 className="timer-para">:</h3>
                </div>
                <div className="inner-clock">
                  <span className="minutes" id="minute"></span>
                  <h3 className="timer-para">:</h3>
                </div>
                <div className="inner-clock">
                  <span className="seconds" id="second"></span>
                </div>
              </div>
            </div>
        </center>
        <form onSubmit={submitHandler}>
        <div class="container" >
          <div class="wrap">
            <textarea onChange={(e)=>setCode(e.target.value)} spellcheck="false" placeholder="write your code here..."  required></textarea>
          </div>
          
          </div>
          <div class="col">
            <div id="button">
            {/* <button class="btn btn-success">Run Code</button> */}
            <button className="btn btn-success" type="submit">Run</button>
            <br />
            <button class="btn btn-success">Submit</button>
            <br />
            <pre id="ans"></pre>
            </div>
          </div>
        {/* </div> */}
        </form>
            
            {output.map((q)=>{
              return(
                <OutputComponent
                yourOutput={q.youroutput}
                expectedOutput={q.expected}
                
                
                />

              )
            })}
        </div>
      </div>
    </div>
    
    
    )
    
}
