const express=require('express');

//6
const passport=require('passport');
//2
const router=express.Router();



const internsController=require('../controllers/interns_controller');


router.get('/paid',internsController.paid);
router.get('/unpaid',internsController.unpaid);
router.get('/all',internsController.paid);

//router.get('/experience',jobsController.fresher);


module.exports=router;