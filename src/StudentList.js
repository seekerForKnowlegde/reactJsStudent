import React,{useState} from "react";
import Component from "./Componenet";

import Card from "./Card";

import "./Card.css"
import "./StudentList.css"
import StudentFilter from "./StudentFilter"

const StudentList=(props)=>
{ 
  const [selectedYear,setTheYear]=useState("0000")

  const functionTogetValue=(valueHere)=>{
     setTheYear(valueHere);
     console.log(valueHere);
}


const filteredStudent=props.student.filter((stud)=>{
  return stud.Date.getFullYear().toString()===selectedYear
})

    return (
      <div className="card-style">
        <StudentFilter
          dataFromStudFiltertoStudentList={functionTogetValue}
          dropDownYear={selectedYear}

        ></StudentFilter>
{filteredStudent.length===0 ? <p>No Student Found</p> : 
          filteredStudent.map((stud)=> (<Component  key={stud.id}  name={stud.name} roll={stud.roll} dob={stud.Date}/>))
  }
        {/* <Component
          roll={props.student[0].roll}
          name={props.student[0].name}
          dob={props.student[0].Date}
        ></Component>
        <Component
          roll={props.student[1].roll}
          name={props.student[1].name}
          dob={props.student[1].Date}
        ></Component>
        <Component
          roll={props.student[2].roll}
          name={props.student[2].name}
          dob={props.student[2].Date}
        ></Component> */}
      </div>
    );
}



export default StudentList