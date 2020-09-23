const mongoose= require('mongoose');

const RecruiterSchema=new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true

    },
    name:{
        type: String,
        required:true

    }
}, {
    timestamps:true

});


const Recruiter= mongoose.model('Recruiter',RecruiterSchema);

module.exports=Recruiter;