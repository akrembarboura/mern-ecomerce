const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require("../models/User");




//register 
const registerUser = async(req,res) =>{
    const {userName, email, password} = req.body;
    try{
        const hashPassword = await bcrypt.hash(password ,12)
        const newUser = new user({
            userName,
            email,
            password: hashPassword,

        });
        await newUser.save();
        res.status(200).json({
            
            success : true,
            message :'register succseful'

        })





    }catch{
        console.log(e);
        req.status(500).json({
            success : false,
            message :'some error occured'
        })
        
    }
}





//login
const loginUser = async(req, res) =>{
    const {email,password} = req.body;
    try{

    }catch{
        console.log(e);
        req.status(500).json({
            success : false,
            message :'some error occured'
        })
        
    }
}





//logout



//ayth middleware


module.exports = { registerUser}