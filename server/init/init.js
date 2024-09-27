const mongoose =  require("mongoose");
const Semester5= require("../model/Sem5.js")
const Semester6 = require("../model/Sem6.js") 
const AI_5 = require("../init/AI_sem5.js");
const DS_5 = require("../init/DataScience_sem5.js");
const Android_5 = require("../init/android_sem5.js");



const MongUrl = "mongodb://127.0.0.1:27017/QBProject";



main().then( ()=>{
    console.log("connected to DB");
})
.catch((e)=>{
    console.log(e);
});



async function main (){
    await mongoose.connect(MongUrl);
}






let SEData = [
{text:"what is software engineering ?",mark:"5",imp:true},
{text:"explain 1",mark:"10",imp:false},
{text:"explain  2 SDLC lifecycle",mark:"10",imp:false},
{text:"explain   3  SDLC lifecycle",mark:"10",imp:false},
{text:"what is software engineering ?",mark:"5",imp:true},

{text:"what is software engineering ?",mark:"5",imp:true},

{text:"what is software engineering ?",mark:"5",imp:true},

]


let DSData = [
    {text:"what are different technique of data science",mark:"10",imp:false},
    {text:"explain the importance of data science",mark:"5",imp:true},
    {text:"what are different technique of data science",mark:"10",imp:false},
    {text:"explain the importance of data science",mark:"5",imp:true},
    {text:"what are different technique of data science",mark:"10",imp:false},
    {text:"explain the importance of data science",mark:"5",imp:true},
    {text:"what are different technique of data science",mark:"10",imp:false},
    {text:"explain the importance of data science",mark:"5",imp:true},
    ]

    let ADSData = [
        {text:"introduce the logistic regression",mark:"10",imp:false},
        {text:"explain the importance of simple linear regression",mark:"5",imp:true},
        ]
        
let SQAData = [
            {text:"what are the Software quality challenges ?",mark:"10",imp:false},
            {text:"explain the importance of software quality assurance techniques",mark:"5",imp:true},
            ]




initDB_sem5 = async () => {
await Semester5.deleteMany({});



//ArtificialIntelligence
await Semester5.findOneAndUpdate(
  {}, 
  { $push: { ArtificialIntelligence: { $each: AI_5} } },  
  { new: true, upsert: true }  
);


// Android prog
await Semester5.findOneAndUpdate(
  {}, 
  { $push: { AndroidProgramming: { $each: Android_5} } },  
  { new: true, upsert: true }  
);

//DataScience
await Semester5.findOneAndUpdate(
  {}, 
  { $push: { DataScience: { $each: DS_5} } },  
  { new: true, upsert: true }  
);

//SoftwareEngineering
await Semester5.findOneAndUpdate(
        {},  // Find the document (if you want to update a specific document, add a query here)
        { $push: { SoftwareEngineering: { $each: SEData } } },  // Push the new questions into the Se field
        { new: true, upsert: true }  // Return the updated document, create if not found
      );


      //AdvanceDataScience
       await Semester5.findOneAndUpdate(
        {}, 
        { $push: {  AdvanceDataScience: { $each: ADSData } } },  
        { new: true, upsert: true }  
      );


      console.log("insertion of Data successfull . . .")
} 



initDB_sem6 = async () => {
  
  await Semester6.deleteMany({});
  
      // SoftwareQualityAssurance
        await Semester6.findOneAndUpdate(
          {}, 
          { $push: {  SoftwareQualityAssurance: { $each: SQAData } } },  
          { new: true, upsert: true }  
        );
  
  //  AdvanceDataScience
        await Semester6.findOneAndUpdate(
          {}, 
          { $push: {  AdvanceDataScience: { $each: ADSData } } },  
          { new: true, upsert: true }  
        );
  
  
        console.log("insertion of Data successfull . . .")
  } 



  // function calls  

  initDB_sem5();
 initDB_sem6();