import React,{useState} from "react";
import "./component.css"

import DateofBirth from "./DateofBirth";



const Component=(props)=>
{
 
  return (
    <div className="component-style">
      <h4>Welcome {props.name}</h4>
      <p>you are {props.roll} </p>
      <DateofBirth date={props.dob}></DateofBirth>
    </div>
  );

  
};

export default Component;