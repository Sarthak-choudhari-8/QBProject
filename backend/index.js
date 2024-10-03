// = ++ +
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const path = require("path");
const ejsMate = require("ejs-mate");

const Feedback = require("./model/Feedback");
const Subject=  require("./model/Subject.js");
const Admin = require("./model/Admin.js");


const CBCS = require("./model/CBCS.js");
const  NEP = require("./model/NEP.js");


const ExpressError = require("./utils/ExpressError.js")
const wrapAsync = require("./utils/WrapAsync.js");
const { configDotenv } = require("dotenv");


let corsOption = {
    origin: "*",
    method: "GET,POST,DELETE,PUT,PATCH",
    credential: "true"
}

app.use(express.json());
app.use(cors(corsOption));
app.set("view engine ", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);



const MongoURL = "mongodb://127.0.0.1:27017/QBProject";
const DBURL = process.env.ATLAS_URL;

main().then(() => {
    console.log("connected to DB");
})
    .catch((e) => {
        console.log(e);
    })

async function main() {
    await mongoose.connect(DBURL)
}




app.get("/", (req, res) => {

    res.send("this is root ");

});

app.get("/getAdmin",wrapAsync(async(req,res)=>{

let result = await Admin.findOne({});


return res.json({result});


}))

app.post("/feedback",wrapAsync( async(req, res) => {
    
        let { Name, email_phone, message } = req.body;

        let message1 = new Feedback({
            name: Name,
            email_phone: email_phone,
            message: message,

        })
        await message1.save();

        return res.json({ status: true })
    
   

}))

app.post("/GetQuestions",wrapAsync( async (req, res) => {
    
        let {  curriculum, course, year, semester,  subject, mark    } = req.body;
        
        if (curriculum == "CBCS") {

    
            const query = {
                Course: course,
                Semester: semester,
                Subject: subject.value,
              };

              let questions = await CBCS.find(query);

              
            if (!questions) {
                console.log(`No documents found matching the criteria.`);
                return { status: false, msg: "No Questions found" };
              }

            if (!Array.isArray(questions)) {
                console.error("Expected an array of questions.");
                return [];
              }

              if (year != 0) {questions = questions.filter(question => question.Year == year) }
              

            if (mark != 0) { questions = questions.filter(question => question.Mark == mark); }
             

        return res.json({ status: true, msg:"No Questions found , Check your Options " , questions });
    
    }

        else if(curriculum == "NEP"){

        
            const query = {
                Course: course,
                Semester: semester,
                Subject: subject.value,
              };

              let questions = await NEP.find(query);

              
            if (!questions) {
                console.log(`No documents found matching the criteria.`);
                return { status: false, msg: "No Questions found" };
              }

            if (!Array.isArray(questions)) {
                console.error("Expected an array of questions.");
                return [];
              }

              if (year != 0) {questions = questions.filter(question => question.Year == year) }
              

            if (mark != 0) { questions = questions.filter(question => question.Mark == mark); }
             

        return res.json({ status: true, msg:"No Questions found , Check your Options " , questions });
        }
       
        
        else{
        return res.json({ status: false , msg:"Please re check your options !"});
}
    


}))

app.get("/getSubjects", wrapAsync( async(req,res)=>{
    let data = await  Subject.find({});
    
    return res.json({data});
    
}))

app.post("/AddQuestion", wrapAsync( async(req,res)=>{

    let {curriculum,course ,year , semester ,question , subject ,mark, imp} = req.body;
    
    if (curriculum == "CBCS"){
    let NewQues = new CBCS({
        Course:course,
        Year:year,
        Semester:semester,
        Subject:subject.value,
        Text:question,
        Mark:mark,
        Imp:imp

    }) 

    await NewQues.save();
}
else if(curriculum == "NEP"){

        let NewQues = new NEP({
            Course:course,
            Year:year,
            Semester:semester,
            Subject:subject.value,
            Text:question,
            Mark:mark,
            Imp:imp
    
        }) 
    
        await NewQues.save();
}

    return res.json({status:true});
}))

app.post("/AddSubject",wrapAsync( async(req,res)=>{

let subName = req.body.newSubject ;

const newSubject = new Subject({
    name: subName
});
await newSubject.save();

return res.json({status:true})
}))

app.get("/GetFeedbacks", wrapAsync( async(req,res)=>{

let Data = await Feedback.find({});
// console.log(Data);
return res.json({status:true , Data});
}))

app.delete("/DelQuestion/:id", wrapAsync(async(req,res)=>{
 
const { id } = req.params; 
const { curriculum } = req.body;

if(curriculum == 'CBCS'){
await CBCS.findByIdAndDelete(id);
return res.json({status:true});

}
else if(curriculum == 'NEP'){
await NEP.findByIdAndDelete(id);
return res.json({status:true});

}


    return res.json({status:false});
}))

app.get("*", (req, res, next) => {

    next(new ExpressError(404, "page not found "));
})


app.listen(process.env.PORT, () => {
    console.log("listening to port ");
})

app.use((err, req, res, next) => {
    let { status = 500, message = "An error occurred" } = err;

    res.status(status).render("error.ejs", { err });

})