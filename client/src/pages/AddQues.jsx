
import "../UI_Design/addQues.css"
import { useEffect, useState } from "react";
import Select from "react-select"
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import { AddNewSubjectRoute, AddQuestionRoute, GetSubjectsRoute } from "../utility/APIRoute";

export default function AddQues({getWithExpiry}) {


const host = `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}`;
// const host = `${window.location.origin}`

const AddQuestionRoute= `${host}/AddQuestion`;
const AddNewSubjectRoute = `${host}/AddSubject`;
const GetSubjectsRoute = `${host}/getSubjects`;



    const Navigate = useNavigate();

    useEffect(() =>{

        if(! getWithExpiry('admin-login')){
          Navigate("/admin"); 
        
        }
       
      },[] )

    let [subjectList, setSubjectList] = useState([])
    let [isChecked, setIsChecked] = useState(false);
    let [newSubject, setNewSubject] = useState("");
    let [DBMsg, setDBMsg] = useState(false)
    let [addSubMsg, setAddSubMsg] = useState(false);
    let [selctedValues, setSelectedValues] = useState({
        curriculum: "",
        course: "",
        year: "",
        semester: "",
        question: "",
        subject: "",
        mark: "",

    });


    useEffect(() => {
        const fetchData = async () => {

            try {
                const { data } = await axios.get(GetSubjectsRoute);
            
                    const names = data.data.map(subject => subject.name);
                    setSubjectList(names);
                
            } catch (error) {
                console.error("Error fetching subjects:", error); 
            }
        };

        fetchData();

    }, [addSubMsg]);
   
    
    const options = subjectList.map(sub =>
        ({ value: sub, label: sub })
    );

    const handleCheckboxChange = (event) => {
        setIsChecked(!isChecked);
    };

    let handleChange = (event) => {
        setSelectedValues({ ...selctedValues, [event.target.name]: event.target.value })
        setDBMsg(false);
    }

    const handleChange2 = (option) => {
        setSelectedValues({ ...selctedValues, subject: option });  // Update the selected option
        setDBMsg(false);

    };

    let handleChange3 = (event) => {
        setNewSubject(event.target.value);
        setAddSubMsg(false)
    }


    let handleSubmit = async (event) => {
        event.preventDefault();


        let { curriculum, course, year, semester, question, subject, mark } = selctedValues;

        let imp = isChecked;

        let { data } = await axios.post(AddQuestionRoute, {
            curriculum, course, year, semester, question, subject, mark, imp
        });


        if (data.status) {
            setDBMsg(true);
        }

        setSelectedValues({ ...selctedValues, question: "" });
    }

    let handleSubmit2 = async (event) => {
        event.preventDefault();


        let { data } = await axios.post(AddNewSubjectRoute, {
            newSubject
        });

        if (data.status) {
            setAddSubMsg(true);
        }


        setNewSubject("");
    }


    return (

        <>

<div className="read-feedback-background" id="home-background">

                <div className="read-feedback-shape1 read-feedback-shapes"></div>
                <div className="read-feedback-shape2 read-feedback-shapes"></div>

            </div>
            <div className="Navbar sticky">


                <div className="nav-logo"></div>
                <div className="nav-heading">Question Bank <div className="nav-heading-logo"></div></div>
                <div className="nav-links">
                    <a href="/home#home-background">Home</a>
                    <a href="/Admin">Admin</a>
                    <a href="/feedback">Feedback</a>
                    <a href="/about"> About Us</a>
                </div>



            </div>

            <form className="add-subject" onSubmit={(event) => handleSubmit2(event)}>

                {addSubMsg ? <p> ! Subject Added !</p> : <p> Add New Subject (Carefully) </p>}  <input placeholder="Enter Subject Name" name="NewSubject" onChange={(event) => { handleChange3(event); }} required /> <button type="submit">Add Subject</button>
            </form>

            <form className="add-question-box" onSubmit={(event) => handleSubmit(event)}>

                <select className="addQues-select-select" name="curriculum" value={selctedValues.curriculum} onChange={(event) => { handleChange(event); }} required >
                    <option className="select-option" value="">Curriculum</option>
                    <option className="select-option" value="CBCS">CBCS</option>
                    <option className="select-option" value="NEP">NEP</option>

                </select>


                <select className="addQues-select-select" name="course" value={selctedValues.course} onChange={(event) => { handleChange(event); }} required  >
                    <option className="select-option" value="">Course</option>
                    <option className="select-option" value="BCS">BCS</option>
                    <option className="select-option" value="BCA">BCA Mng.</option>
                    <option className="select-option" value="Bsc_opt">Bsc Opt.</option>


                </select>

                <select className="addQues-select-select" name="year" value={selctedValues.year} onChange={(event) => { handleChange(event); }} required  >
                    <option className="select-option" value="">Year</option>
                    <option className="select-option" value="2324">2023-24</option>
                    <option className="select-option" value="2425">2024-25</option>
                    <option className="select-option" value="2526">2025-26</option>
                     <option className="select-option" value="2627">2026-27</option>
                        <option className="select-option" value="2728">2027-28</option>
                        <option className="select-option" value="2829">2028-29</option>

                </select>


                <select className="addQues-select-select " name="semester" value={selctedValues.semester} onChange={(event) => { handleChange(event); }} required  >

                    <option className="select-option" value="">Semester</option>
                    <option className="select-option" value="1">Semester 1</option>
                    <option className="select-option" value="2">Semester 2</option>
                    <option className="select-option" value="3">Semester 3</option>
                    <option className="select-option" value="4">Semester 4</option>
                    <option className="select-option" value="5">Semester 5</option>
                    <option className="select-option" value="6">Semester 6</option>
                    <option className="select-option" value="7">Semester 7</option>
                    <option className="select-option" value="8">Semester 8</option>

                </select>


                <Select
                    value={selctedValues.subject}  // Pass the currently selected option
                    onChange={handleChange2}  // Handle the change event
                    options={options}
                    isSearchable={true}  // Enable search functionality
                    placeholder="Select Subject"
                    isClearable={true} //enable clear functionality
                    className="addQues-select-select-subject"
                    required
                />


                <textarea placeholder="Enter Question" name="question" value={selctedValues.question} onChange={(event) => {
                    handleChange(event);
                }} required />


                <select className="addQues-select-select" name="mark" value={selctedValues.mark} onChange={(event) => { handleChange(event); }} required >

                    <option className="select-option" value="">Mark</option>
                    <option className="select-option" value={10}>10 Mark</option>
                    <option className="select-option" value={5}>5 Mark</option>
                    <option className="select-option" value={1}>1 Mark</option>
                </select>

                <div className="addQues-checkbox-div"> <p className="CheckBox-p"> Important :</p> <input type="checkbox" className="checkbox-btn" name="imp" value={isChecked} onChange={handleCheckboxChange} /></div>

                <button type="submit">Submit</button>
            </form>

            <div className="DB-Msg">{DBMsg ? <p>Question Added Successfully . . . </p> : <p>Add Questions ! ! !</p>}</div>
        </>

    )
}
