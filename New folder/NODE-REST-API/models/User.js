const mongoose = require ("mongoose");

const UserSchema = new mongoose.Schema(
{
    username: {
        type: String,
        required:true,
        min:3,
        max:10,
        unique:true
    },
    
    password:{
        type:String,
        required:true,
        min:4,
    },
    profilePicture:{
        type:String,
        default:"",
     },
     coverPicture:{
        type:String,
        default:"",
     },
     followers:{
         tupe:Array,
         default:[]
     },
     following:{
        tupe:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false,

    }, 
},
   {timestamps:true} 

);
module.exports = mongoose.model("User", UserSchema)