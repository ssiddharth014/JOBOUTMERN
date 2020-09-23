

const Post=require('../models/post');

const User=require('../models/user');

module.exports.home=function(req,res){
	Post.find({}).
	populate('user').
	populate({
		path:'comment',
		populate :{path:'user'}
     })
	.exec(function(err,posts)

{

    User.find({},function(err,users){
console.log(posts.length);


    	return res.render('home',{
			title:"HOME",
			posts:posts,
			all_users:users
		});

    });


		
	});
}
//module.expo