const User= require('../models/user');
const Post=require('../models/post');



module.exports.paid= function(req,res){

	Post.find({}).
	populate('user').
	populate({
		path:'comment',
		populate :{path:'user'}
     })
	.exec(function(err,posts)

{

    User.find({},function(err,users){



    	return res.render('internships',{
			title:"Internships",
			x:"Internships",
			posts:posts,
			all_users:users
		});

    });


		
	});
	
}

module.exports.unpaid= function(req,res){

	Post.find({}).
	populate('user').
	populate({
		path:'comment',
		populate :{path:'user'}
     })
	.exec(function(err,posts)

{

    User.find({},function(err,users){



    	return res.render('internships',{
			title:"Internships",
			x:"Internships",
			posts:posts,
			all_users:users
		});

    });


		
	});
	
}


