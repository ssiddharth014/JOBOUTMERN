const express=require('express');

//6
const passport=require('passport');
//2
const router=express.Router();



const jobsController=require('../controllers/jobs_controller');


router.get('/dailywagers',jobsController.dailywagers);
router.get('/fresher',jobsController.fresher);
router.get('/experience',jobsController.fresher);
router.get('/all',jobsController.all);


module.exports=router;