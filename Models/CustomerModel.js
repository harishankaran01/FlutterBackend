const mongoose=require("mongoose");

const customerSchema=mongoose.Schema({
    customerNumber:{
        type:Number,
        required:[true,"Please Enter the Customer Number"],
        nullable:false
    },
    customerName:{
        type:String,
        required:[true,"Please Enter the customer Name"]
    },
    customerId:{
        type:String,
        required:[true,"Please Enter the Your customerId"],
        nullable:false
    },
    Address:{
        type:String,
        required:[true,"Please Enter the Address"]
    },
    pinCode:{
        type:Number,
        required:[true,"Please Enter the Pincode"]
    },
    Landmark:{
        type:String,
        required:[true,"Please Enter the Landmark"],
        nullable:false
    },
    DateOfBirth:{
        type:Date,
        required:[true,"Please Enter the Date of Birth"]
    },
    email:{
        type:String,
        required:[true,"Please Enter the  Email"]
    },
    emergencyContactNumber:{
        type:Number,
        required:[true,"Please Enter the Emergency Contact Number"]
    }
    }
)


module.exports=mongoose.model("Customers",customerSchema)
