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

  const[selectedquestions,setSelectedquestions]=useState([]);
  const[selectedstudents,setSelectedstudents]=useState([]);
    
  useEffect(()=>{

    const fetchData=async()=>{
        const result=await axios.get('/api/users/student');
        const questionSet=await axios.get('/api/users/questset');
        setStudents(result.data);
        setQuestions(questionSet.data);
  };
  fetchData();
},[]);

// console.log(students);

const [constraints, setConstraints] = useState({});

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


      const handleChangeQuestions = (item) => {
        if (selectedquestions.includes(item)) {
          setSelectedquestions(selectedquestions.filter(i => i !== item));
        } else {
          setSelectedquestions([...selectedquestions, item]);
        }
      };


      const handleChangeStudents = (item) => {
        if (selectedstudents.includes(item)) {
          setSelectedstudents(selectedstudents.filter(i => i !== item));
        } else {
          setSelectedstudents([...selectedstudents, item]);
        }
      };
      // console.log(filteredStudents);
      // console.log(filteredQuestions);
      console.log(selectedquestions);
      console.log(selectedstudents);


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
      {filteredStudents.map(student => {
        return(
                   
                   <label key={student.id}>
                   <input 
                   className="email-box" type="checkbox"
                   checked={selectedstudents.includes(student)}
                   onChange={() => handleChangeStudents(student)}
                   // checked={
                    
                   //  selectedquestions.includes(q) ? 
                   //  setSelectedquestions(selectedquestions.filter(i =>i !=q))
                   //  : setSelectedquestions([...selectedquestions,q])
                   
                   // }
                   />
                   {student.regNumb}
                   </label>    
               
           );
      })}
    </ul>


    <div>
      <label>Filter by level:</label>
      <input value={setQuestions.level} onChange={(e) => setLevels({...levels, level: e.target.value})} />
    </div>
    <ul>
      {/* {filteredQuestions.map(question=> (
        <li >{question.questdesc}</li>
      ))} */}

      {filteredQuestions.map((q)=>{
                {/* console.log(q); */}
                return(
                   
                        <label key={q.qnum}>
                        <input 
                        className="email-box" type="checkbox"
                        checked={selectedquestions.includes(q)}
                        onChange={() => handleChangeQuestions(q)}
                        // checked={
                         
                        //  selectedquestions.includes(q) ? 
                        //  setSelectedquestions(selectedquestions.filter(i =>i !=q))
                        //  : setSelectedquestions([...selectedquestions,q])
                        
                        // }
                        />
                        {q.questdesc}
                        </label>    
                    
                );
            }
            )}
    </ul>

  </div>

   
    )
    
}
