const mongoose=require("mongoose");

const LoginSchema=mongoose.Schema({
    userId:{
        type:String,
        required:[true,"Please Enter the ID"],
        nullable:false
    },
    password:{
        type:String,
        required:[true,"Please Enter the Password"]
        }
    }
)

module.exports=mongoose.model("AdminLogin",LoginSchema)