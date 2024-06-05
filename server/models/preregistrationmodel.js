const mongoose =require('mongoose');
const preregistrationschema=new mongoose.Schema({
    "name":{
        type:String,
        required:true
    },
    "email":{
        type:String,
        required:true
    },
    "number":{
        type:String,
        required:true
    },
    "college":{
        type:String,
        required:true
    },
})

module.exports=preregistrationmodel=mongoose.model('preregistrationmodel', preregistrationschema)