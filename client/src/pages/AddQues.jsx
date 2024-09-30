
import "../UI_Design/addQues.css"

export default function AddQues(){

    return(
    
    <>
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

<div className="add-subject">

<p> Add New Subject </p>   <input placeholder="Enter Subject Name" /> <button>Add Subject</button>   
</div>

<div className="add-question-box">

<select className="addQues-select-select">
    <option>Policy</option>
</select>


<select className="addQues-select-select" >
<option>Course</option>
</select>


<select className="addQues-select-select" >
<option>Semester</option>
</select>


<select className="addQues-select-select-subject" >
<option>Subject</option>
</select>


<select className="addQues-select-select" >
<option>Mark</option>
</select>

<input placeholder="Enter Question"/>

<button>Submit</button>
</div>
    </>
    
    )
    }