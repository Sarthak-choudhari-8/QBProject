const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const SubjectSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true // To ensure no duplicate subject names
    }
});
const Subject = mongoose.model("Subject",SubjectSchema);
module.exports = Subject;
