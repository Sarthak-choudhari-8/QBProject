const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    name: {
        type: String,

    },
    email_phone: {
        type: String,
    },
    message: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }

});

const Feedback = mongoose.model("Feedback", FeedbackSchema);
module.exports = Feedback;
