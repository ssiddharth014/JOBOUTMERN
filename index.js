const express=require('express');
//const cookieParser=require('cookie-parser');
var bodyParser = require('body-parser')
const cors= require('cors')
//const http=require('http');
//const path=require('path');
const port=process.env.PORT || 5000;
const app=express();
//layout
const db=require('./config/mongoose');

db();
app.use(cors())
app.use(bodyParser.json());


app.use('/users',require('./routers/users'));

app.listen(port,function(err,){
 
    if (err){
        console.log(`error in running the server : ${err}`);
    }



    console.log(`server is up and running at port :${port}`);
}); 