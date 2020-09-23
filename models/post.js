const mongoose= require('mongoose');

const NewJobsSchema=new mongoose.Schema({
    
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    requirements:{
        type:String,
        required:true
    },

    additionals:{
        type: String
    },
    
    recruiter:{
      type: mongoose.Schema.Types.ObjectId,
        ref: 'Recruiter'
    },
    applications:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobSeeker'
    }],

    
    
}, {
    timestamps:true

});
const NewJobs= mongoose.model('NewJobs',NewJobsSchema);

module.exports=NewJobs;