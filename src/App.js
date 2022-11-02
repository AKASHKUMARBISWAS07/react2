import './index.css';
import React, { useState } from "react";

function App() {
const [name,setName]=useState("");
const [department,setDepartment]=useState("");
const [rating,setRating]=useState("");
const [list,setList]=useState([])

const onSubmits=(event)=>{
  event.preventDefault();
const data={name,department,rating,}
setList((ls)=>[...ls,data])
};
  const inputEvent=(event)=>{
    setName(event.target.value)
  }
  const inputEventTwo=(event)=>{
    setDepartment(event.target.value)
  }
  const inputEventThree=(event)=>{
    setRating(event.target.value)
  }
  return (
   <div className='m1'>
    <div className='m2'>
      <h1>🎇 EMPLOYEE FEEDBACK FORM 🎇</h1>
      <form onSubmit={onSubmits}>
       <label> Name 👉</label>: <input id="i0" type="text" placeholder='✨        Enter  Name          ✨' onChange={inputEvent} value={name}/><br/><br/>
       <label>Department 👉</label>: <input  id="i1" type="text" placeholder=' ✨     Enter  Department       ✨' onChange={inputEventTwo} value={department}/><br/><br/>
       <label>Rating 👉</label>: <input id="i2" type="number" placeholder=' ✨      Rating     ✨ '  onChange={inputEventThree} value={rating}/><br/><br/><br/>
        <button type='submit'>Submit</button>
      </form>
    </div><br/><br/><hr/>
 { 
    list.map((a)=><div className='d1'>
    <span>Name :{a.name} 🎡</span><br></br>
    <span>Department : {a.department} 🎡</span><br></br>
   <span> Rating : {a.rating} 🎡</span>
    </div>
    )}
   
   </div>
  );
}
export default App;