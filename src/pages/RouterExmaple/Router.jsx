import React from "react";
import {Link} from "react-router-dom";

export const Routerhomepage = (props)=>{
  return(
    <div>
      <h1>HOMEPAGE</h1>
      <Link to='/title'>Link to Title</Link>
      <button onClick ={()=>props.history.push("/title/9090")}> Button Routing</button>
    </div>
  )
} 

   


export const Title = ( )=>{
  return(
    <div>
      <h1>Title</h1>
    </div>
  )}
   


export const TopicDetails = (props)=>{
  return(
    <div>
      <h1>TopicDetail: {props.match.params.titleID}</h1>
    </div>
  )}
    

