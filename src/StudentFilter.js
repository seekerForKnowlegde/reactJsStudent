import React from "react";

const StudentFilter=(props)=>{
    const studentHandler=(event)=>{
        props.dataFromStudFiltertoStudentList(event.target.value);
    }
  // const filteredStudents=props..filter


    return (
      <div>
        <label>Filter by year</label>
        <select onChange={studentHandler} value={props.dropDownYear}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    );
}

export default StudentFilter