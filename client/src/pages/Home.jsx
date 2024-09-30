import Select from "react-select";

import { useState, useEffect } from "react";
import QContainer from "../components/QContainer";
import "../UI_Design/home.css"
import { GetQuestionRoute } from "../utility/APIRoute";
import axios from "axios";








export default function Home() {
  
   
    const [selectedOption, setSelectedOption] = useState(null);

    let [Msg1 , setMsg1] = useState("Search for Questions ");
    let [selctedValues, setSelectedValues] = useState({
        semester: "",
        subject: "",
        topic: "",
        mark: ""
    })


let  [Questions , setQuestions] = useState([])
let [filteredQuestions, setFilteredQuestions] = useState([]);
let [subjectList , setSubjectList] = useState(["Artificial Intelligence", "Advance Java", "Data Mining", "Data Science", "Software Engineering", "Android Programming"])

const options2 = subjectList.map(sub=>
    ({value:sub,label:sub})
    );
      

    const subjects = {
        1: ["math 101", "Physics 101", "Chemistry 101"],
        2: ["Math 102", "Physics 102", "Biology 101"],
        3: ["Math 201", "Computer Science 101", "Statistics 101"],
        4: ["Math 202", "Computer Science 102", "History 101"],
        5: ["Artificial Intelligence", "Advance Java", "Data Mining", "Data Science", "Software Engineering", "Android Programming",],
        6: ["Machine Learning", "Advance Java", "Data Warehouse", "Advance Data Science", "Software Quality Assurance",],

    };

    const handleChange2 = (option) => {
        setSelectedOption(option);  // Update the selected option
      };

    function updateSubjects() {
        const semesterSelect = document.getElementById("semester");
        const subjectSelect = document.getElementById("subject");
        const selectedSemester = semesterSelect.value;

        // Clear previous options
        subjectSelect.innerHTML = '<option className="select-option" value="">Select Subject</option>';

        if (selectedSemester) {
            const availableSubjects = subjects[selectedSemester];
            availableSubjects.forEach(subject => {
                const option = document.createElement("option");
                option.value = subject;
                option.className ="select-option";
                option.textContent = subject;
                subjectSelect.appendChild(option);
            });
        }
    }

    let createTopicArray = (topicsString) => {
        return topicsString.split(',').map(topic => topic.trim().toLowerCase());

    };

    let handleChange = (event) => {
        setSelectedValues({ ...selctedValues, [event.target.name]: event.target.value })
    }

    let handleSubmit = async (event) => {

        let { semester, subject, topic, mark } = selctedValues;
        event.preventDefault();

       let  { data } = await axios.post(GetQuestionRoute, {
            semester, subject, topic, mark
        });


setMsg1(data.msg)


    const questionsData = data.questions.map((q) => ({
        text: q.text,
        mark: q.mark,
        imp: q.imp,
        id: q._id,
    }));

    setQuestions(questionsData);

    const topicArray = createTopicArray(topic);
    
    if (topicArray.length > 0) {
        const filtered = questionsData.filter((q) =>
            topicArray.some((topic) => q.text.toLowerCase().includes(topic))
        );
        setFilteredQuestions(filtered);
    } else {
        setFilteredQuestions(questionsData); // If no topics, send all questions
    }


      
    }

 

 
    return (

        <>
        <div className="DS-site-warn"> Switch To Desktop Site</div>
        <div className="home-background" id="home-background">
<div className="home-shape1 home-shapes"></div>
        <div className="home-shape2 home-shapes"></div>
    </div>
            <div className="Navbar sticky">
                <div className="nav-logo"></div>
                <div className="nav-heading">Question Bank <div className="nav-heading-logo"></div></div>
                <div className="nav-links">
                <a href="/home#home-background">Home</a>
                <a href="/Admin">Admin</a>
                <a href="/feedback">Feedback</a>
                <a href="#"> About Us</a>
                </div>
                
                

            </div>

        

            <div className="SearchForm">

                <form onSubmit={(event) => handleSubmit(event)} >
               
                <Select
        value={selectedOption}  // Pass the currently selected option
        onChange={handleChange2}  // Handle the change event
        options={options2} 
        //  options={options}
        isSearchable={true}  // Enable search functionality
        placeholder="Select a subject"
        isClearable={true} 
        // className="select-select"
      />

                    <select className="select-select" value={selctedValues.semester} id="semester" name="semester" onChange={(event) => {
                        updateSubjects();
                        handleChange(event);
                    }} required >
                        <option className="select-option" value=""> Select Semester</option>
                        <option className="select-option" value="1">Semester 1</option>
                        <option className="select-option" value="2">Semester 2</option>
                        <option className="select-option" value="3">Semester 3</option>
                        <option  className="select-option" value="4">Semester 4</option>
                        <option className="select-option" value="5">Semester 5</option>
                        <option className="select-option" value="6">Semester 6</option>
                    </select>


                    <select className="select-select" id="subject"  value={selctedValues.subject} name="subject" onChange={(event) => {
                        handleChange(event);
                    }} required>
                        <option className="select-option" value="none">Select Subject</option>
                    </select>


                    <input className="select-select" value={selctedValues.topic} placeholder=" Include Keyword " name="topic" onChange={(event) => {
                        handleChange(event);
                    }} />

                    <select className="select-select" value={setSelectedValues.mark} id="mark" name="mark" onChange={(event) => {
                        handleChange(event);
                    }} required >
                        <option className="select-option" value="">Select Type</option>
                        <option className="select-option" value={0}>Any</option>

                        <option className="select-option" value={10}>10 Mark</option>
                        <option className="select-option" value={5}>5 Mark</option>
                        <option className="select-option" value={1}>1 Mark</option>

                    </select>


                    <button className="search-form-button" type="submit">Submit</button>

                </form>

            </div>


            {(() => {
      if (filteredQuestions.length == 0 ) {
        return <div className="heading-Msg">{Msg1} <i className="fa-solid fa-magnifying-glass"></i></div>
      } 
    
      else {
        return   <QContainer Questions={filteredQuestions}  /> 
      }
    })()}
                    
           

        </>
    )
 
}