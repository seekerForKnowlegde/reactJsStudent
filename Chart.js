import React from "react";
import "./chart.css"
import ChartBar from "./ChartBar"

const Chart=(props)=>{
    const dataPointsValue=props.dataPoints.map(dataPoints=> dataPoints.value)
    const TotalMax=Math.max(...dataPointsValue)
return (
<div className="chart">
   {props.dataPoints.map( (datapoints) => (<ChartBar
    value={datapoints.value}
    maxValue={TotalMax}
    label={datapoints.label}
    key={datapoints.label}


   
   ></ChartBar>))}




</div>

);
}




export default Chart
