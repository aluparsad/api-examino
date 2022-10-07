const mongoose = require("mongoose");


const examSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    questions: {
        type: Array,
        required: true
    }
    
}, { timestamps: true })


const Exam = mongoose.model('exams', examSchema);

module.exports = Exam;


