
import { useNavigate } from "react-router-dom";


export default function Admin_button(){

    let Navigate = useNavigate();


    return (

<>

<div className="admin-container">

<button onClick={ ()=>Navigate('/AddQues') }>Add New Course / Questions </button>
<button onClick={ ()=>Navigate('/feedbackDB')}>Read Feedback </button>
<button onClick={ ()=>Navigate('/DelQues')}>Delete Course / Questions</button>



</div>

</>

    )
}