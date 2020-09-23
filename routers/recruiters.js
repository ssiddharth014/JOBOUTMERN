const express=require('express');

//6
const passport=require('passport');
//2
const router=express.Router();



const recruitersController=require('../controllers/recruiters_controller');


router.get('/:id',recruitersController.info);


//router.get('/fresher',jobsController.fresher);
//router.get('/experience',jobsController.fresher);


module.exports=router;