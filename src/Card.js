import React from "react";
import "./Card.css"

function Card(props)
{
    const classes='card-style'+ props.className;
    return(
        <div>
        <div className={classes}>{props.childern}</div>
        <h1>Card Works</h1>
        </div>
    );
}


export default Card;