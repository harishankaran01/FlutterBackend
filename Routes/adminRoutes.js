const express=require("express");
const routes=express.Router();
const userController = require("../controller/Usercontroller");
const adminController=require("../controller/Admincontroller");
const customerController=require("../controller/Customercontroller");
routes.route("/login").post(adminController);
routes.route("/adduser").post(userController.registerUser).get(userController.getAllUser);
routes.route("/addcustomer").post(customerController.registerCustomer).get(customerController.getAllCustomer);


module.exports=routes