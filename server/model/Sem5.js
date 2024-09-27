const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//question schema 
const QuestionSchema = new Schema({

text:{
    type:String,
    required:true
},
mark:{
    type:Number,
    require:true,
},

imp:{
    type:Boolean,
    default:false
}

});

const SemesterSchema = new Schema({

    semester:{type:String,required:true},

    SoftwareEngineering:[QuestionSchema],
    DataScience:[QuestionSchema],
    ArtificialIntelligence:[QuestionSchema],
    AndroidProgramming:[QuestionSchema],
    AdvanceJava:[QuestionSchema],
    DataMining:[QuestionSchema],
});



const Semester5 = mongoose.model("Semester5", SemesterSchema);
module.exports = Semester5;

