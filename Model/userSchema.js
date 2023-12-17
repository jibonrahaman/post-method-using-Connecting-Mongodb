const mongoose = require('mongoose');
const {Schema}=mongoose;

const userSchema =new Schema({
    firstname:String,
    lastname:String,
    email:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model("UserList",userSchema);