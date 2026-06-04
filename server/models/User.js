const { Password } = require('@mui/icons-material');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        unique : true
    },
   
     email : {
        type : String,
        required : true,
        unique :true
    },

     Password : {
        type : String,
        required : true,
        unique :true
    },
    role :{
        type : String,
        default :'user'
    }


})
const User = mongoose.model('User' , userSchema);
module.exports = User;