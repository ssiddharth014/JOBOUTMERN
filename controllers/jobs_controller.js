const Post=require('../models/post');
const User= require('../models/user');

module.exports.dailywagers= function(req,res){

	Post.find({}).
	populate('user').
	populate({
		path:'comment',
		populate :{path:'user'}
     })
	.exec(function(err,posts)

{

    User.find({},function(err,users){



    	return res.render('jobs',{
			title:"Jobs",
			x:"Daily Wages",
			posts:posts,
			all_users:users
		});

    });


		
	});
	
}



module.exports.all= function(req,res){

	Post.find({}).
	populate('user').
	populate({
		path:'comment',
		populate :{path:'user'}
     })
	.exec(function(err,posts)

{

    User.find({},function(err,users){



    	return res.render('newjobs',{
			title:"Jobs",
			x:"New Jobs..",
			posts:posts,
			all_users:users
		});

    });


		
	});
	
}


module.exports.fresher= function(req,res){

	Post.find({}).
	populate('user').
	populate({
		path:'comment',
		populate :{path:'user'}
     })
	.exec(function(err,posts)

{

    User.find({},function(err,users){



    	return res.render('jobs',{
			title:"Jobs",
			x:"Full time role",
			posts:posts,
			all_users:users
		});

    });


		
	});
	
}