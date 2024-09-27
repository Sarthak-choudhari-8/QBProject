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

    SoftwareQualityAssurance:[QuestionSchema],
    AdvanceDataScience:[QuestionSchema],
    MachineLearning:[QuestionSchema],
    AdvanceJava_sem6:[QuestionSchema],
    DataWarehouse:[QuestionSchema],

});



const Semester6 = mongoose.model("Semester6", SemesterSchema);
module.exports = Semester6;

// module.exports = {
//     SemesterSchema6
//   };