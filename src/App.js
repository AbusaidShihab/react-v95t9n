import React,{useState} from "react";
import "./style.css";

export default function App() {
const [name,setname]=useState();
const [password,setpassword]=useState();
  function hel(e){
e.preventDefault();
  }
  return (
    <div>
      <h2>Hi {name}</h2>
    <h2>Hi {password}</h2>
     <form onSubmit={hel}>

<input type="text"placeholder="enter your name"onChange={(e)=>setname(e.target.value)}/><br></br>
<input type="password"placeholder="enter your password"onChange={(e)=>setpassword(e.target.value)}/><br></br>
<button>submit</button>

       </form>
    </div>
  );
}
