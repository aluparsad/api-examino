const mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
    username:String,
    
    uid:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    
    email:{
        type:String,
        required:true,
        unique:true,
        index:true
    },

    type:{
        type:String,
        enum:['TEACHER', 'STUDENT']
    }
})


const User = new mongoose.model('users', userSchema)


module.exports = User;