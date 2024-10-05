import { useState } from "react"
import axios from 'axios'
// import { feedbackRoute } from "../utility/APIRoute"

import { useNavigate } from "react-router-dom";
import "../UI_Design/feedback.css"


export default function Feedback(){

    const host = `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}`;
    // const host = `${window.location.origin}`

    const feedbackRoute = `${host}/postFeedback`;


    const Navigate = useNavigate();



    let [feedbackValues , setFeedbackValues] = useState({
        Name:"",
        email_phone:"",
        message:"",
    })


    let handleChange = (event) =>{

        setFeedbackValues({...feedbackValues , [event.target.name]:event.target.value})
        }


        let handleSubmit = async (event) =>{
            event.preventDefault();
            let { Name,
                email_phone,
                message} = feedbackValues;

            const {data} = await axios.post(feedbackRoute,{
               Name,email_phone,message
            });




            Navigate("/home");
        }


    return (
    
    <>
    
    <div className="DS-site-warn"> Switch To Desktop Site</div>

    <div className="shape-background" id="login-shape-bg">
        <div className="shapes shape1" id="login-shape1"></div>
        <div className="shapes shape2" id="login-shape2"></div>
    </div>


<form onSubmit={(e)=> handleSubmit(e)}  className="feedback-form" >
<h3>[  Feedback Form  ]</h3>


<label htmlFor="Name" className="feedback-label">Name</label>

<input className="feedback-input"  placeholder="Enter your Name " name="Name" id="Name" onChange={(e)=>handleChange(e)}  required/>

<label htmlFor="email_phone" className="feedback-label">Email / Phone</label>
<input className="feedback-input" placeholder="Enter your email or phone" name="email_phone" id="email_phone" onChange={(e)=>handleChange(e)} required />

<label htmlFor="message" className="feedback-label">Feedback</label>
<textarea className="feedback-textarea" placeholder="You can also Suggest us Some Questions , ( write course + semester + subject of question)" name="message" id="message" onChange={(e)=>handleChange(e)} required/>

<button className="feedback-button" type="submit">Submit</button>

</form>




 
 
    </>
    )
    
    }