const mongoose=require("mongoose");

const course=new mongoose.Schema({
     thumbnail:{
        type:String,
        required:true
    },
     language:{
         type:String,
        default:"english",
        enum:["english","hindi"]
    },
     subject:{
        type:String,
        required:true
    },
     title:{
        type:String,
        required:true
    },
     valid:{
        type:String,
        required:true
    },
     lesson:{
        type:String,
        required:true
    },
     teachername:{
        type:String,
        required:true
    }
},{timestamps:true})
module.exports=mongoose.model("courses",course)