const express=require('express');

//6
//2
const router=express.Router();

//4
const usersController=require('../controllers/user_controller');
const JobSeeker = require('../models/JobSeeker');
const Post= require('../models/post');

const util =require('../util')





//5
//making profile page accessible only when a user is signed in
//router.get('/profile',usersController.profile);-> if this is used profile page is aacessible even when a user is not signed in




router.post('/RecruiterSignIn',usersController.RecruiterSignIn);
router.post('/RecruiterRegister',usersController.RecruiterRegister);
router.post('/JobSeekerSignIn',usersController.JobSeekerSignIn);
router.post('/JobSeekerRegister',usersController.JobSeekerRegister);
router.post("/createJob",async(req,res)=>{
	console.log(req.body)
	
	let post = new Post({
		title:req.body.name,
        description:req.body.description,
        requirements:req.body.requirements,
        additionals:req.body.additionals,
        recruiter:req.body.id

		
	});
	const newPost = await post.save();
	if(newPost)
	{
        console.log("new",newPost)
		res.send({"message":"New Job created", "data":newPost})
    }
    else{
        console.log("err")
        return res.status(500).send({message:"Error in creating Job"})
    }
	

});

router.get("/allJobs",async(req,res)=>{
    let post = await Post.find({}).populate('recruiter').populate('applications')
    if(post)
    {
         res.send({jobs:post})
    }
    else{
		res.send({message:"Not found"})
	}
	

})
router.get("/CompanyJobs/:id",async(req,res)=>{
    let post = await Post.find({recruiter:req.params.id}).populate('recruiter').populate('applications')
    if(post)
    {
         res.send({jobs:post})
    }
    else{
		res.send({message:"Not found"})
	}
	

})

router.get("/job/:id/:id2",async(req,res)=>{
    const post= await Post.findOne({_id:req.params.id}).populate('applications')
    const post1= await Post.findOne({_id:req.params.id})
	if(post){
        for(let i=0;i<post1.applications.length;i++){if(post1.applications[i]===req.params.id2){
            res.send({post:post,"is":true})
            
        }}
res.send({post:post,"is":false})

	}else{
		res.status(404).send({message:"Job Not found"})
	}
})
 router.post("/JobApply/:id1/:id2",async(req,res)=>{
    const post= await Post.findOne({_id:req.params.id1});
    let User= await JobSeeker.findOne({_id:req.params.id2})
    if(post && User)
    {
       post.applications.push(req.params.id2);
       User.apply.push(req.params.id1)
       let newApplication= await post.save();
       let save= await User.save()
        if(newApplication && save){res.send({status:201,msg:"Applied",post:post})}
        else{ res.send({message:"Job Not found"})}
        
      
    }else{
		res.status(404).send({message:"Job Not found"})
	}

 })
 router.get('/JobsApplied/:id',async(req,res)=>{
     let Seeker = await JobSeeker.findOne({_id:req.params.id}).populate('apply')
     if(Seeker)
     {
         
         res.send({myData:Seeker})
     }
     else{
         res.send({error:"error"})
     }
 })
//router.get('/applications/:id',usersController.applications);


//router.get('/signOut',usersController.destroySession);

module.exports=router;