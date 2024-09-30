import { useState } from "react"
import Admin_button from "../components/Admin_button";
import "../UI_Design/admin.css"


export default function Admin(){



let [errorMsg , setErrorMsg] = useState("")
let [isAuthenticated , setIsAuthenticated] = useState(false);

let Uname = "Sarthak";
let Pass = "123123";

let [values , setValues] = useState({
    username:"",
    password:""
})


let handleSubmit = (event) => {
event.preventDefault();
let {username , password } = values;
 if(username != Uname || password != Pass){
    setErrorMsg("incorrect userID or password !");
 }
 else{
    setIsAuthenticated(true);
 }

}

let handleChange = (event) =>{

setValues({...values , [event.target.name]:event.target.value})
}

return (

<>

 
<div className="DS-site-warn"> Switch To Desktop Site</div>

<div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
<form onSubmit={(event) => handleSubmit(event)} className="admin-form">
      <div className="admin-form-heading">  <h3> Admin Login </h3></div>
<div className="admin-inp1">
        <label htmlFor="username" className="form-label">Enter Admin UserID</label>
        <input className="admin-input" type="text" placeholder="Enter Username" id="username" name="username" onChange={(e) =>handleChange(e) } required />
        </div>

<div className="admin-inp2">
        <label htmlFor="password" className="form-label" >Enter Admin Password</label>
        <input className="admin-input" type="password" placeholder="Password" id="password"  name="password" onChange={(e) =>handleChange(e) } required />
 </div>
        <button className="admin-button" type="submit" >Submit</button>
       
    </form>

    {(() => {
      if (isAuthenticated) {
        return   <Admin_button   /> 
      } 
    
      else {
        return <div className="admin-heading-Msg">{errorMsg}</div>
      }
    })()}
             


</>
)

}