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

 
Navigate("/home");
 

}

let handleChange = (event) =>{

setValues({...values , [event.target.name]:event.target.value})
}


    return (
    
    <>
    
    <div className="DS-site-warn"> Switch To Desktop Site</div>

<div class="shape-background">
        <div class="shapes shape1"></div>
        <div class="shapes shape2"></div>
    </div>

<form onSubmit={(event) => handleSubmit(event)} className="login-form">
        <h3> Question Bank </h3>
        <h3> [ VNM ] </h3>


        <label for="username" className="form-label">Name</label>
        <input className="login-input" type="text" placeholder=" Enter Your Name " id="username" name="username" onChange={(e) =>handleChange(e) } required />

        <label for="password" className="form-label" >City</label>
        <input className="login-input" type="text" placeholder="Enter Your City" id="password"  name="password" onChange={(e) =>handleChange(e) } required />

        <button className="login-button" type="submit" >Submit</button>
       
    </form>
    
    
    
    </>
    )
    
    }






    ////////
