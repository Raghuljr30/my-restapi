import React, { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Axios from 'axios';
import { useState } from 'react';
import Quest from "./Quest";
import axios from "axios";
import "./home.css";
import "./admin.css";
import { Link } from "react-router-dom";
export default function Admin(){

    const params=useParams();

    const navigate=useNavigate();



    const [status,setStatus]=useState()
    const submitHandler=async(e)=>{
      e.preventDefault();
      try
      {
        const result=await Axios.post(`/api/users/email`,{
          selectedItems,
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
            <div className="admin">
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
            <br></br>
        }
           
           

        )}
        
    </div>
    <button className="btn btn-success" type="submit">Submit</button>
    </form>
    
        
    )
}
