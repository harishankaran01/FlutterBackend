const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    userId:{
        type:String,
        required:[true,"Please Enter the ID"],
        nullable:false
    },
    password:{
        type:String,
        required:[true,"Please Enter the Password"]
        },
    role:{
        type:String,
        required:[true,"Please Enter the Your Role"],
        nullable:false
    },
    name:{
        type:String,
        required:[true,"Please Enter the Name"],
        nullable:false
    },
    contactNo:{
        type:Number,
        required:[true,"Please Enter the ContactNumber"]
    },
    ParentNameGuardianName:{
        type:String,
        required:[true,"Please Enter the Name"],
        nullable:false
    },
    ParentcontactNoGuardiancontactNo:{
        type:Number,
        required:[true,"Please Enter the ContactNumber"]
    },
    Address:{
        type:String,
        required:[true,"Please Enter the Address"]
    },
    AadhaarNo:{
        type:Number,
        required:[true,"Please Enter the Aadhaar Number"]
    }
    }
)



module.exports=mongoose.model("users",userSchema)
