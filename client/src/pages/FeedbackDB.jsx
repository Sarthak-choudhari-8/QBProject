

import { useEffect, useState } from "react"
import "../UI_Design/read_feedback.css"
// import { GetFeedbacksRoute } from "../utility/APIRoute";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function FeedbackDB({getWithExpiry}){

  const host = `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}`;
  const GetFeedbacksRoute = `${host}/GetFeedbacks`;



  const Navigate = useNavigate();

  useEffect(() =>{

    if(!getWithExpiry('admin-login')){
      Navigate("/admin"); 
    
    }
   
  },[] )

let [Data , setData] = useState([]);

useEffect(()=>{

  let fnc = async()=>{

   let   { data } = await axios.get(GetFeedbacksRoute);
  
      
setData(data.Data);

  }

  fnc();

},[])


    return (
<>



<div className="read-feedback-background" id="home-background">

                <div className="read-feedback-shape1 read-feedback-shapes"></div>
                <div className="read-feedback-shape2 read-feedback-shapes"></div>

            </div>

<div className="feedback-container">
<h1 style={{textAlign:"center"}}> | Feedback |</h1>

      {
      Data.map((item) => (
        <div key={item._id} className="read-feedback-div"> 
        
          <p><strong>Name:</strong> {item.name}</p>
          <p><strong>Email/Phone:</strong> {item.email_phone}</p>
          <p><strong>Message:</strong> {item.message}</p>
        </div>
      ))
      }
    </div>


</>
  )

}