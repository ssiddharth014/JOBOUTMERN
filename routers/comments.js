const express=require('express');

//6
const passport=require('passport');
//2
const router=express.Router();

//4
const commentController=require('../controllers/comments_controller');



//5
//making profile page accessible only when a user is signed in
//router.get('/profile',usersController.profile);-> if this is used profile page is aacessible even when a user is not signed in



router.post('/create/:id1',passport.checkAuthentication,commentController.create);


router.post('/destroy/:id',passport.checkAuthentication,commentController.destroy);


module.exports=router;