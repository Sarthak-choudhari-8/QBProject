// = ++ +

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const Feedback = require("./model/Feedback");

const Semester5 = require("./model/Sem5.js");
const Semester6 = require("./model/Sem6.js");


let corsOption = {
    origin: "*",
    method: "GET,POST,DELETE,PUT,PATCH",
    credential: "true"
}

app.use(express.json());
app.use(cors(corsOption));

const MongoURL = "mongodb://127.0.0.1:27017/QBProject";

main().then(() => {
    console.log("connected to DB");
})
    .catch((e) => {
        console.log(e);
    })

async function main() {
    await mongoose.connect(MongoURL)
}



app.get("/", (req, res) => {

    res.send("this is root ");

});

app.post("/feedback", async (req, res, next) => {
    try {
        // console.log(req.body);

        let { Name, email_phone, message } = req.body;

        let message1 = new Feedback({
            name: Name,
            email_phone: email_phone,
            message: message,

        })
        await message1.save();

        return res.json({ status: true })
    }
    catch (e) {
        next(e);
    }

})
///////////////////////

app.post("/GetQuestions", async (req, res, next) => {
    try {
        let { semester, subject, topic, mark } = req.body;
        
        const getQuestions5 = async (subjectName, marksValue) => { //5 
            const result = await Semester5.findOne({}, { [subjectName]: 1 });
            if (!result) {
                console.log(`No questions found for ${subjectName} with marks ${marksValue}`);
                return res.json({ status: false , msg:"No questions found " });;
            }
            let questions = result[subjectName];
            if (marksValue != 0) { questions = questions.filter(question => question.mark == marksValue); }
        return res.json({ status: true, msg:"No Questions found " , questions });
        }
        const getQuestions6 = async (subjectName, marksValue) => { //5 
            const result = await Semester6.findOne({}, { [subjectName]: 1 });
            if (!result) {
                console.log(`No questions found for ${subjectName} with marks ${marksValue}`);
                return res.json({ status: false , msg:"No questions found " });;
            }
            questions = result[subjectName];
            if (marksValue != 0) { questions = questions.filter(question => question.mark == marksValue); }
            return res.json({ status: true,msg:"No Questions found " , questions });
        }
        /////////////////
        if (semester == '5') {
            if (subject == 'Software Engineering') {
                getQuestions5("SoftwareEngineering", mark);
            }
            else if (subject == 'Data Science') {
                getQuestions5("DataScience", mark);
            }
            else if (subject == 'Artificial Intelligence') {
                getQuestions5("ArtificialIntelligence", mark);
            }
            else if (subject == "Android Programming") {
                getQuestions5("AndroidProgramming", mark);
            }
        }

        else if (semester == '6') {
            if (subject == 'Software Quality Assurance') {
                getQuestions6("SoftwareQualityAssurance", mark);
            }
            else if (subject == 'Advance Data Science') {
                getQuestions6("AdvanceDataScience", mark);
            }
        }
        
        else{
        return res.json({ status: false , msg:"Please re check your options !"});
}
    }
    catch (er) {
        next(er)
    }

})


app.listen(5000, () => {
    console.log("listening to port 5000 ");
})


app.use((err, req, res, next) => {
    let { status = 500, message = "default error" } = err;
    console.log(err);
    // res.status(status).render("listings/error.ejs" , {err});
    res.send(err);
})