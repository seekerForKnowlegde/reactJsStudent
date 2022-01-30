import React from "react";

const DateofBirth=(props)=>{
  console.log(props)
  const month=props.date.toLocaleString("en-US",{month:"long"});
  
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

 //const dateHere=props.date.toDateString();
 //const day=props.date.getFullYear()
    return (
      <div>
        <p>{month}</p>
        <p>{day}</p> 
        {/* <p>{dateHere}</p>
        {/* <p>{day}</p> */}
      </div>
    );
 
}


export default DateofBirth;