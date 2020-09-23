const Post=require('../models/post');
const User= require('../models/user');

module.exports.info= function(req,res){
	Post.find({}).
	populate('user').
	populate({
		path:'comment',
		populate :{path:'user'}
     })
	.exec(function(err,posts)

{

    User.find({},function(err,users){



    	return res.render('Recruiters',{
			title:"Recruiters",
			x:req.params.id,
			posts:posts,
			all_users:users
		});

    });


		
});
}