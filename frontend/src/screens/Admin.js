import React, { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Axios from 'axios';
import { useState } from 'react';
// import Quest from "./Quest";
import axios from "axios";
import "./home.css";
import "./admin.css";
import { Link } from "react-router-dom";
export default function Admin(){

    const params=useParams();

    const navigate=useNavigate();



    const [status,setStatus]=useState()
    const[testName,settestName]=useState('');
    const[startTime,setstartTime]=useState('');
    const[endTime,setendTime]=useState('');
    const[duration,setDuration]=useState('');
    const submitHandler=async(e)=>{
      e.preventDefault();
      try
      {
        const result=await Axios.post(`/api/users/email`,{
          selectedItems,
          testName,
          startTime,
          endTime,
          duration,
        })
        setStatus(result.data);
        console.log(result.data);
      }
      catch(err)
      {
          console.log(err);
      }
      
    }
   

    const[items,setEmail]= useState([])
    // const [selectedItems, setSelectedItems] = useState([]);
    useEffect(()=>{

        const fetchData=async()=>{
            const result=await axios.get('/api/users/studentemail');
            setEmail(result.data);
        
       
        
      };
      fetchData();
    },[]);
    // console.log(items);
   
    const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  console.log(selectedItems);
    

    return(
        
      <form onSubmit={submitHandler}>
        <div className="nav-admin">
            <p className="admin-header">Admin Dashboard</p>
        </div>
        <div className="admin">
            {/* <div class="admin-form"> */}
                <form>
                    <div className="form-group">
                        <label className="admin-label">Test Name:</label>
                        <input type="text" name="testName" className="admin-input" placeholder="Test name" required onChange={(e)=>settestName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="admin-label">Start Time:</label>
                        <input type="datetime-local"className="admin-input" name="startTime" required onChange={(e)=>setstartTime(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="admin-label">End Time:</label>
                        <input type="datetime-local"className="admin-input" name="endTime" required onChange={(e)=>setendTime(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label className="admin-label">Duration:</label>
                        <input type="time" className="admin-input" name="duration" placeholder="Duration (in minutes)" required onChange={(e)=>setDuration(e.target.value)} />
                    </div>
                        <div className="admin-innersearch">
                            <input type="search" className="admin-search" placeholder="Search..."></input>
                        </div>
                </form>
      {/* {items.map(items => (
        <label key={items.s}>
          <input
            type="checkbox"
            checked={selectedItems.includes(items.stud)}
            onChange={() => handleChange(items)}
          />
          {items.name}
        </label>
      ))} */}
      {items.map((q)=>{
                
            return(
                <div className="admin-email">
                    <label key={q.stud}>
                    <input 
                    className="email-box" type="checkbox"
                    checked={selectedItems.includes(q)}
                    onChange={() => handleChange(q)}
                    />
                    {q.stud}
                    </label>    
                </div>
            );
        }
        )}
        <button className="admin-btn" type="submit">Submit</button>
    </div>
    {/* </div> */}
    </form>   
    )
}


