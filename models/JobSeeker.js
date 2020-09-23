const mongoose= require('mongoose');

const JobSeekerSchema=new mongoose.Schema({
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

    },
    apply:[{type: mongoose.Schema.Types.ObjectId,
        ref: 'NewJobs'

    }],
}, {
    timestamps:true

});


const JobSeeker= mongoose.model('JobSeeker',JobSeekerSchema);

module.exports=JobSeeker;