const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const AdminSchema = new Schema({
    AdminID:{
        type:String,
    },
    AdminPass:{
        type:String,
    }
   
});
const Admin = mongoose.model("Admin",AdminSchema);
module.exports = Admin;
