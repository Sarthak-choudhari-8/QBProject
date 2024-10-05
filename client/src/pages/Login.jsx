import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../UI_Design/login.css"




export default function Login(){


let Navigate = useNavigate();


let [values , setValues] = useState({
    username:"",
    password:""
})


let handleSubmit = (event) => {
event.preventDefault();

 
Navigate("/home");
 

}

let handleChange = (event) =>{

setValues({...values , [event.target.name]:event.target.value})
}


    return (
    
    <>
    
    <div className="DS-site-warn"> Switch To Desktop Site</div>

<div className="shape-background" id="login-shape-bg">
        <div  className="shapes shape1" id="login-shape1"></div>
        <div className="shape2 shapes" id="login-shape2"></div>
    </div>

<form onSubmit={(event) => handleSubmit(event)} className="login-form">
        <h3> Question Bank </h3>
        <h3> [ VNM ] </h3>


        <label htmlFor="username" className="form-label">Name</label>
        <input className="login-input" type="text" placeholder=" Enter Your Name " id="username" name="username" onChange={(e) =>handleChange(e) } required />

        <label htmlFor="password" className="form-label" >City</label>
        <input className="login-input" type="text" placeholder="Enter Your City" id="password"  name="password" onChange={(e) =>handleChange(e) } required />

        <button className="login-button" type="submit" >Submit</button>
       
    </form>
    
    <div className="git-link-box">
        <p> Project Link : <a href="https://github.com/Sarthak-choudhari-8/QBProject.git">Click here <i class="fa-solid fa-link"></i></a> | <i class="fa-brands fa-github"></i> Sarthak-choudhari-8 </p>
    </div>
    
    </>
    )
    
    }






    ////////
