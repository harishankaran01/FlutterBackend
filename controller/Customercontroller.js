const express = require("express");
const UserModel = require("../Models/CustomerModel");
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const registerCustomer = async (req, res, next) => {

    const { customerNumber, customerName, customerId, pinCode, Landmark, DateOfBirth, Address, email, emergencyContactNumber } = req.body;
    if (!customerNumber || !customerName || !customerId || !pinCode || !Landmark || !DateOfBirth || !Address || !email || !emergencyContactNumber) {
        res.statusCode = 404;
        return (next(new Error("All field are mandatory")));
    }
    try {
        let User = await UserModel.find({ customerId });
        if (User.length > 0)
            return (next(new Error("Duplicate user")));

    } catch (error) {
        res.statusCode = 500;
        return (next(new Error("Database Error")));
    }
    // try {
    //     const  hashedPassword = await bcrypt.hash(password, 10);
    //     password1 =  hashedPassword;

    // } catch (error) {
    //     res.statusCode=500;
    //     return(next( new Error("Error raised in bcrypt")));
    // }
    const User = await UserModel.create({
        customerNumber, customerName, customerId, pinCode, Landmark, DateOfBirth, Address, email, emergencyContactNumber
    });
    res.json(
        {
            Message: "Customer Register SuccessFull"
        }
    )
}
const getAllCustomer = async (req, res) => {
    try {
        const Customer = await UserModel.find();
        if (Customer.length <= 0)
            return (next(new Error("No Users Customer")));
        res.json(Customer)
    }
    catch (err) {
        res.statusCode = 500;
        return (next(new Error("Database Error")));
    }


}
module.exports = {
    registerCustomer,
    getAllCustomer
} 