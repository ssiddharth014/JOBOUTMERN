const JobSeeker=require('../models/JobSeeker');
const Recruiter = require('../models/Recruiters');
const Post= require('../models/post');

const  getToken =require('../util');








module.exports.RecruiterSignIn=async function (req,res){

	try{
		let signinUser = await Recruiter.findOne({email:req.body.values.email,
			password:req.body.values.password});
		let token= getToken.getToken(signinUser)
		if(signinUser)
		{
			console.log(signinUser)

          res.send({
                 	_id:signinUser.id,
                 	name:signinUser.name,
                     email:signinUser.email,
                     userType:"company",
                 	token:getToken.getToken(signinUser)
                 })
		
                 
		}
		else{
			res.status(401).send({msg:'Invalid Email/Password'})
		}

	}
	catch(err){
		res.send({msg:err.msg})

	}
}


module.exports.RecruiterRegister= async function(req,res){
    console.log("he")
    console.log(req.body)


	try{
        
		
          
           let user= new Recruiter({
           	name:req.body.values.name,
           	email:req.body.values.email,
           	password:req.body.values.password
           })

           let newUser= await user.save()
           if(newUser){
               
           	res.send({
           		    _id:newUser.id,
                 	name:newUser.name,
                     email:newUser.email,
                     userType:"company",
                 	token:getToken.getToken(newUser)

           	})
           }
       
       
       else{
           res.status(401).send({msg:"Invalid user data"})
       }
   
	}
	catch(err){
		res.send({msg:err.message})

	}
}

module.exports.JobSeekerSignIn=async function (req,res){

	try{
		let signinUser = await JobSeeker.findOne({email:req.body.values.email,
			password:req.body.values.password});
		let token= getToken.getToken(signinUser)
		if(signinUser)
		{
			console.log(signinUser)

          res.send({
                 	_id:signinUser.id,
                 	name:signinUser.name,
                     email:signinUser.email,
                     userType:"user",
                 	token:getToken.getToken(signinUser)
                 })
		
                 
		}
		else{
			res.status(401).send({msg:'Invalid Email/Password'})
		}

	}
	catch(err){
		res.send({msg:err.msg})

	}
}
module.exports.JobSeekerRegister= async function(req,res){

	try{
		
          
           let user= new JobSeeker({
           	name:req.body.values.name,
           	email:req.body.values.email,
           	password:req.body.values.password
           })

           let newUser= await user.save()
           if(newUser){
           	res.send({
           		    _id:newUser.id,
                 	name:newUser.name,
                     email:newUser.email,
                     userType:"user",
                 	token:getToken.getToken(newUser)

           	})
           }
       
       
       else{
           res.status(401).send({msg:"Invalid user data"})
       }
   
	}
	catch(err){
		res.send({msg:err.msg})

	}
}

