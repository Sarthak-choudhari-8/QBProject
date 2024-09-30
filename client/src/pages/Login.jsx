import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../UI_Design/login.css"




export default function Login(){


let Navigate = useNavigate();
let Uname = "VNM";
let Pass = "123123";

let [values , setValues] = useState({
    username:"",
    password:""
})


let handleSubmit = (event) => {
event.preventDefault();
let {username , password } = values;
 if(username != Uname || password != Pass){
    console.log("incorrect username or password");

 }
 else{
Navigate("/home");
 }

}

let handleChange = (event) =>{

setValues({...values , [event.target.name]:event.target.value})
}


    return (
    
    <>
    
    <div className="DS-site-warn"> Switch To Desktop Site</div>

<div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
<form onSubmit={(event) => handleSubmit(event)} className="login-form">
        <h3> BCS Question Bank [ VNM ] </h3>

        <label for="username" className="form-label">Username</label>
        <input className="login-input" type="text" placeholder="Enter Username" id="username" name="username" onChange={(e) =>handleChange(e) } required />

        <label for="password" className="form-label" >Password</label>
        <input className="login-input" type="password" placeholder="Password" id="password"  name="password" onChange={(e) =>handleChange(e) } required />

        <button className="login-button" type="submit" >Submit</button>
       
    </form>
    
    
    
    </>
    )
    
    }






    ////////
