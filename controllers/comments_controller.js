const Comment=require('../models/comments');
const Post=require('../models/post');

//const commentsMailer= require ('../mailers/comments_mailer');

module.exports.create=function(req,res){

console.log(req.body.post);
Post.findById(req.params.id1,function(err,post){
	console.log(post);
	if(post){

console.log('yes');

		Comment.create({


			content:req.body.content,
			post:req.body.post,
			user:req.user._id
		},function(err,comment){
			if(err){
				console.log('error in creating comment');
				return ;
			}

			post.comment.push(comment);
			post.save();
			console.log(comment.user.email);
			commentsMailer.newComment(comment);
			return res.redirect('/');
		});
	}
	else{
		console.log('no');
	}
});



}

module.exports.destroy=function(req,res){




	Comment.findById(req.params.id,function(err,comments){
		if(comments.user==req.user.id){
			comments.remove();
			let postid=comments.post;
			Post.findByIdAndUpdate(postid,{$pull:{comment:req.params.id}},
				function(err,post){
					return res.redirect('back');
				});
		}
		else
		{
			return res.redirect('back');
		}
	});
}