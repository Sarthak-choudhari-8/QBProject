
import Select from "react-select";

import { useState, useEffect } from "react";
import QContainer from "../components/QContainer";
import "../UI_Design/delQues.css"
import { DeleteQuestionRoute, GetQuestionRoute } from "../utility/APIRoute";
import axios from "axios";
import { GetSubjectsRoute } from "../utility/APIRoute";
import { useNavigate } from "react-router-dom";



export default function DelQues({getWithExpiry}) {

    const Navigate = useNavigate();


    useEffect(() =>{

        if(! getWithExpiry('admin-login')){
            Navigate("/admin"); 
        
        }
       
      },[] )


    const [selectedOption, setSelectedOption] = useState(null);

    let [Msg1, setMsg1] = useState("Select Options to Search Questions");
    let [selctedValues, setSelectedValues] = useState({
        curriculum: "",
        course: "",
        year: "",
        semester: "",
        topic:"",
        subject: "",
        mark: "",

    });
    let [subjectList, setSubjectList] = useState([])


    let [Questions, setQuestions] = useState([])
    let [filteredQuestions, setFilteredQuestions] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(GetSubjectsRoute);
            
                    const names = data.data.map(subject => subject.name);
                    setSubjectList(names);
                
            } catch (error) {
                console.error("Error fetching subjects:", error); // Handle any errors
            }
        };

        fetchData();

    }, []);

    const options = subjectList.map(sub =>
        ({ value: sub, label: sub })
    );

    // const handleChange2 = (option) => {
    //     setSelectedOption(option);  // Update the selected option
    // };


    let createTopicArray = (topicsString) => {
        return topicsString.split(',').map(topic => topic.trim().toLowerCase());

    };

    let handleChange = (event) => {
        setSelectedValues({ ...selctedValues, [event.target.name]: event.target.value })
    }

    const handleChange2 = (option) => {
        setSelectedValues({ ...selctedValues, subject: option });  // Update the selected option
    };


    let handleSubmit = async (event) => {
        event.preventDefault();
        let { curriculum, course, year, semester, topic, subject, mark } = selctedValues;

        let { data} = await axios.post(GetQuestionRoute, {
            curriculum, course, year, semester, subject, mark   
             });


        //    console.log(data); 

        setMsg1(data.msg)
        


        const questionsData = data.questions.map((q) => ({
            text: q.Text,
            mark: q.Mark,
            imp: q.Imp,
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

let handleDelete = async(id,event) =>{

    let {curriculum} = selctedValues;
let response = await axios.delete(`${DeleteQuestionRoute}/${id}` ,
     {data: {curriculum} }
);

const { data } = response;


handleSubmit(event);
}

    return (

        <>
            <div className="read-feedback-background" id="home-background">

<div className="read-feedback-shape1 read-feedback-shapes"></div>
<div className="read-feedback-shape2 read-feedback-shapes"></div>

</div>


            <div >

                <form onSubmit={(event) => handleSubmit(event)} className="delQues-SearchForm" >


                    <select className="select-select" name="curriculum" value={selctedValues.curriculum} onChange={(event) => { handleChange(event); }} required >
                        <option className="select-option" value="">Curriculum</option>
                        <option className="select-option" value="CBCS">CBCS</option>
                        <option className="select-option" value="NEP">NEP</option>

                    </select>


                    <select className="select-select" name="course" value={selctedValues.course} onChange={(event) => { handleChange(event); }} required  >
                        <option className="select-option" value="">Course</option>
                        <option className="select-option" value="BCS">BCS</option>
                        <option className="select-option" value="BCA">BCA Mng.</option>
                        <option className="select-option" value="Bsc_opt">Bsc Opt.</option>


                    </select>

                    <select className="select-select" name="year" value={selctedValues.year} onChange={(event) => { handleChange(event); }} required  >
                        <option className="select-option" value="">Year</option>
                        <option className="select-option" value={0}>Any Year</option>

                        <option className="select-option" value="2324">2023-24</option>
                        <option className="select-option" value="2425">2024-25</option>
                        <option className="select-option" value="2526">2025-26</option>

                    </select>

                    <select className="select-select " name="semester" value={selctedValues.semester} onChange={(event) => { handleChange(event); }} required  >

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
                    value={selctedValues.subject} 
                    onChange={handleChange2}  
                    options={options}
                    isSearchable={true}  
                    placeholder="Select Subject"
                    isClearable={true} 
                    className="select-select-subject"
                    required
                />

                    <input className="select-select" value={selctedValues.topic} placeholder=" Include Keyword " name="topic" onChange={(event) => {
                        handleChange(event);
                    }} />


                    <select className="select-select " value={setSelectedValues.mark} id="mark" name="mark" onChange={(event) => {
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
                if (filteredQuestions.length == 0) {
                    return <div className="delQues-heading-Msg">{Msg1} <i className="fa-solid fa-magnifying-glass"></i></div>
                }

                else {
                    return <div className="delQues-container"> <QContainer Questions={filteredQuestions} DelQues={true}  handleDelete={handleDelete}  /></div>
                }
            })()}



        </>
    )

}