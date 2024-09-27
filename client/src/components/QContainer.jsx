


export default function QContainer({Questions }){

  
   
return(

    <>
<div className="Container">

<div className="heading-single">
<div className="heading-text" >Question </div>
           <div className="heading-mark"> Mark </div>
            <div className="heading-imp">Imp</div>
</div>

     {
     Questions.map((question) => (
        <div key={question.id} className="question-single">
           <div className="question-text" > <p> <span className="arrowIcon"><i className="fa-regular fa-hand-point-right"></i></span> {question.text}</p> </div>
           <div className="question-mark"> <p>{question.mark}</p> </div>
            <div className="question-imp"><p> {question.imp ? <div className="impIcon"><i className="fa-solid fa-circle-exclamation" ></i></div> : ""}</p></div>
             
        </div>
    ))}



</div>
    
    </>
)

}