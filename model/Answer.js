const mongoose = require('mongoose')

const answerSchema = mongoose.Schema({
    tid:{
        type:String,
        required:true,
        unique:true,
        index:true
    },

    uid:{
        type:String,
        required:true,
    },

    answers:{
        type:Array,
        required:true
    },
}, {timestamps:true})

const Answer = mongoose.model('answers', answerSchema)

module.exports = Answer;