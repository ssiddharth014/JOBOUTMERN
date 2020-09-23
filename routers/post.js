const express=require('express');

//6
const passport=require('passport');
//2
const router=express.Router();

//4
const postController=require('../controllers/post_controller');



//5
//making profile page accessible only when a user is signed in
//router.get('/profile',usersController.profile);-> if this is used profile page is aacessible even when a user is not signed in



router.post('/create',passport.checkAuthentication,postController.create);


router.get('/destroy/:id',passport.checkAuthentication,postController.destroy);
router.get('/:id2/:id3',postController.setup);

module.exports=router;