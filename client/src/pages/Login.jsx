import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/login.css"




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
    
    <div>
    
   {/* <form onSubmit={(event) => handleSubmit(event)}>

<input type="text" placeholder="enter Username " name="username"  onChange={(e) =>handleChange(e) } required/>
<input type="password"  placeholder="Enter password"  name="password" onChange={(e) =>handleChange(e) } required/>

<button type="submit ">submit</button>
   </form> */}

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
    
    </div>
    )
    
    }






    ////////

    
// import { useState, useEffect } from "react";
// import QContainer from "../components/QContainer";
// import "../UI-Design/home.css"
// import { GetQuestionRoute } from "../utility/APIRoute";
// import axios from "axios";

// export default function Home() {


//     let [selctedValues, setSelectedValues] = useState({
//         semester: "",
//         subject: "",
//         topic: "",
//         mark: ""
//     })

// let  [Questions , setQuestions] = useState([{
//     text:"",
//     mark:0,
//     imp:false,
//     id:""
// }])


// let [filteredQuestions, setFilteredQuestions] = useState([{}]);


//     const subjects = {
//         1: ["math 101", "Physics 101", "Chemistry 101"],
//         2: ["Math 102", "Physics 102", "Biology 101"],
//         3: ["Math 201", "Computer Science 101", "Statistics 101"],
//         4: ["Math 202", "Computer Science 102", "History 101"],
//         5: ["AI", "Adv Java", "Data mining", "Data Science", "Software Engineering", "Android",],
//         6: ["AI2", "Adv Java2", "Data mining2", "Advance Data Science", "Software Quality Assurance", "Android2",],

//     };

//     function updateSubjects() {
//         const semesterSelect = document.getElementById("semester");
//         const subjectSelect = document.getElementById("subject");
//         const selectedSemester = semesterSelect.value;

//         // Clear previous options
//         subjectSelect.innerHTML = '<option value="">--Select Subject--</option>';

//         if (selectedSemester) {
//             const availableSubjects = subjects[selectedSemester];
//             availableSubjects.forEach(subject => {
//                 const option = document.createElement("option");
//                 option.value = subject;
//                 option.textContent = subject;
//                 subjectSelect.appendChild(option);
//             });
//         }
//     }

//     let createTopicArray = (topicsString) => {
//         return topicsString.split(',').map(topic => topic.trim().toLowerCase());

//     };

   


//     let handleChange = (event) => {
//         setSelectedValues({ ...selctedValues, [event.target.name]: event.target.value })
//     }

//     let handleSubmit = async (event) => {
//         let { semester, subject, topic, mark } = selctedValues;
//         event.preventDefault();
//        let  { data } = await axios.post(GetQuestionRoute, {
//             semester, subject, topic, mark
//         });

//         let filterQuestions = (topicArray) => {
//             if (topicArray.length > 0) {
//                 const filtered = Questions.filter(q => 
//                     topicArray.some(topic => q.text.toLowerCase().includes(topic))
//                 );
//                 setFilteredQuestions(filtered);
//                 console.log("topic array",topicArray)
//                 console.log("filter ",filtered)
//             } else {
//                 setFilteredQuestions(Questions); // If no topics, send all questions
//             }
//         };
       

//         // Insert the array into the state
//         setQuestions(data.questions.map(q => ({
//             text: q.text,
//             mark: q.mark,
//             imp: q.imp,
//             id: q._id
//         })));

//         const topicArray = createTopicArray(topic);
//         filterQuestions(topicArray);
//     }

 

//       // Log state whenever it changes
//       useEffect(() => {
//         console.log("Updated Questions State:", Questions);
//                  console.log("filtered  Questions State:", filteredQuestions);

        
//     }, [Questions,filteredQuestions]);

//     return (

//         <>
//             <div className="Navbar">
//                 <a href="/home">Home</a>
//                 <a href="/Admin">Admin</a>
//                 <a href="/feedback">Feedback</a>
//                 <a> about</a>

//             </div>

//             {/*  */}

//             <div className="SearchForm">

//                 <form onSubmit={(event) => handleSubmit(event)} >



//                     <select id="semester" name="semester" onChange={(event) => {
//                         updateSubjects();
//                         handleChange(event);
//                     }}  >
//                         <option value="">--Select Semester--</option>
//                         <option value="1">Semester 1</option>
//                         <option value="2">Semester 2</option>
//                         <option value="3">Semester 3</option>
//                         <option value="4">Semester 4</option>
//                         <option value="5">Semester 5</option>
//                         <option value="6">Semester 6</option>
//                     </select>


//                     <select id="subject" name="subject" onChange={(event) => {
//                         handleChange(event);
//                     }}>
//                         <option value="">--Select Subject--</option>
//                     </select>


//                     <input placeholder=" select Topic " name="topic" onChange={(event) => {
//                         handleChange(event);
//                     }} />

//                     <select id="mark" name="mark" onChange={(event) => {
//                         handleChange(event);
//                     }} >
//                         <option value="">--Select Type--</option>
//                         <option value={0}>Any</option>

//                         <option value={10}>10 Mark</option>
//                         <option value={5}>5 Mark</option>
//                         <option value={1}>1 Mark</option>

//                     </select>


//                     <button type="submit">Submit</button>

//                 </form>

//             </div>


   
//             { <QContainer Questions={filteredQuestions}  /> }


//         </>
//     )
 
// }