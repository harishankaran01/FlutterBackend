const express = require("express");
const UserModel = require("../Models/UserModel");
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const registerUser =async(req,res,next)=>{
    let password1;
    const { userId, password,role,name,contactNo,ParentNameGuardianName,ParentcontactNoGuardiancontactNo,Address,AadhaarNo}=req.body;
    if(!userId||!password||!role||!name||!contactNo||!ParentNameGuardianName||!ParentcontactNoGuardiancontactNo||!Address||!AadhaarNo){
        res.statusCode=404;
        return(next(new Error("All field are mandatory")));
    }
    try {
        let User=await UserModel.find({userId});
        if(User.length>0)
           return(next( new Error("Duplicate user")));

    } catch (error) {
        console.log(error);
    }
    try {
        const  hashedPassword = await bcrypt.hash(password, 10);
        password1 =  hashedPassword;

    } catch (error) {
        res.statusCode=500;
        return(next( new Error("Error raised in bcrypt")));
    }
    const User = await UserModel.create({
      userId,role,name,contactNo,ParentNameGuardianName,ParentcontactNoGuardiancontactNo,Address,AadhaarNo,password:password1
    });
    res.json(
        {
            Message:"User Register SuccessFull"}
    )
}
const getAllUser = async(req,res)=>{
    try{
        const user = await UserModel.find();
        if(user.length<=0)
            return(next( new Error("No Users Found")));
        res.json(user)
    }
    catch(err){
        res.statusCode=500;
        return(next( new Error("Database Connection Error")));
    }
    
   
}
module.exports ={
    registerUser,
    getAllUser
} 