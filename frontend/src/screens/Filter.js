import React, { useEffect, useState } from 'react';
import { Navigate, renderMatches, useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import {render} from 'react-dom';
// import { toast } from 'react-toastify';
import axios from 'axios';

export default function Filter()
{
//   const[count,setCount]= useState(0);
 
  const navigate=useNavigate();
  const[students,setStudents]=useState([]);
  const[questions,setQuestions]=useState([]);
    
  useEffect(()=>{

    const fetchData=async()=>{
        const result=await axios.get('/api/users/student');
        const questionSet=await axios.get('/api/users/questset');
        setStudents(result.data);
        setQuestions(questionSet.data);
  };
  fetchData();
},[]);

console.log(students);

const [constraints, setConstraints] = useState({college: "", department: ""});

const [levels, setLevels] = useState({level: ""});

    const filteredStudents = filterStudents(students, constraints);
    const filteredQuestions= filterQuestions(questions,levels)

    function filterStudents(students, constraints) {
        return students.filter(student => {
            return Object.entries(constraints).every(([key, value]) => student[key] === value)
        });
      }

      function filterQuestions(questions, levels) {
        return questions.filter(question => {
            return Object.entries(levels).every(([key, value]) => question[key] === value)
        });
      }
      console.log(filteredStudents);
      console.log(filteredQuestions);


  return (
    <div>
    <div>
      <label>Filter by college:</label>
      <input value={constraints.college} onChange={(e) => setConstraints({...constraints, college: e.target.value})} />
    </div>
    <div>
      <label>Filter by department:</label>
      <input value={constraints.department} onChange={(e) => setConstraints({...constraints, department: e.target.value})} />
    </div>
    <div>
      <label>Filter by Registration Number:</label>
      <input value={constraints.regNumb} onChange={(e) => setConstraints({...constraints, regNumb: e.target.value})} />
    </div>
    <ul>
      {filteredStudents.map(student => (
        <li >{student.name}</li>
      ))}
    </ul>


    <div>
      <label>Filter by level:</label>
      <input value={setQuestions.level} onChange={(e) => setLevels({...levels, level: e.target.value})} />
    </div>
    <ul>
      {filteredQuestions.map(question=> (
        <li >{question.questdesc}</li>
      ))}
    </ul>

  </div>

   
    )
    
}
