import React,{useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import Component from "./Componenet";
import StudentList from "./StudentList";
import Card from "./Card";
import StudentFilter from "./StudentFilter";

import NewStudent from "./NewStudent";

const Dummy_students = [
  {
    id:'s1',
    roll: 11,
    name: "Anmol",
    Date: new Date(2021, 4, 12),
  },
  {id:'s2', roll: 12, name: "Amit", Date: new Date(2022, 3, 22) },
  { id:'s3',roll: 13, name: "Sumit", Date: new Date(2023, 5, 21) },
];

function App() {

 const [studentData,setStudentData]=useState(Dummy_students)


  const FunctionToGetDataFromNewStudentToAppHandler = (dataHere) => {
    // const datainApp = {                                //this retuns the data user enters
    //   ...dataHere,
    // };
    // console.log(datainApp);
    setStudentData((prevStudent)=>{
      return [dataHere,...prevStudent];

    });
   

  };
  console.log(studentData)
  return (
    <div>
      <StudentList student={studentData}></StudentList>
      <NewStudent
        dataFromNewStudentToApp={FunctionToGetDataFromNewStudentToAppHandler}
        
      ></NewStudent>
    </div>
  );
}

export default App;
