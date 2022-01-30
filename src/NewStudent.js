import React, { useState } from "react";

const NewStudent = (props) => {
  const [enteredNewStudentName, setStudentName] = useState("");

  const [enteredNewStudentRoll, setStudentRoll] = useState("");

  const [enteredNewStudentDOB, setStudentDOB] = useState("");

//console.log(enteredNewStudentDOB)


  const NewStudentNameHandler = (event) => {
    setStudentName(event.target.value);
   // console.log(event.target.value);
  };

  const NewStudentRollHandler = (event) => {
     setStudentRoll(event.target.value);
  };

  const NewStudentDOBHandler = (event) => {
     setStudentDOB(event.target.value);
  };

  const NewStudentHandler = (event) => {

       event.preventDefault();
    const newStudentData = {
      name: enteredNewStudentName,
      roll: enteredNewStudentRoll,
      Date: new Date(enteredNewStudentDOB),
    };
   console.log(newStudentData);
    props.dataFromNewStudentToApp(newStudentData);

   


    setStudentDOB('');
   setStudentRoll('');
   setStudentName('');

  };

  return (
    <form onSubmit={NewStudentHandler}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={enteredNewStudentName}
          onChange={NewStudentNameHandler}
        />
      </div>

      <div>
        <label>Roll:</label>
        <input
          type="number"
          value={enteredNewStudentRoll}
          onChange={NewStudentRollHandler}
        />
      </div>

      <div>
        <label>DoB:</label>
        <input
          type="date"
          data-date=""
          data-date-format="DD MMMM YYYY"
          min="2019-01-01"
          max="2022-12-31"
          value={enteredNewStudentDOB}
          onChange={NewStudentDOBHandler}
        />
      </div>

      <button type="submit">SubmitStudent</button>
    </form>
  );
};

export default NewStudent;
