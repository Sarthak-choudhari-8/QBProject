const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SubjectSchema  = new Schema({
    subjects:[String]

}
)
const Subject = mongoose.model("Subject",SubjectSchema);
module.exports = Subject;
