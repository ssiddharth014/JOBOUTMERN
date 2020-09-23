/*const mongoose= require('mongoose');

mongoose.connect("mongodb+srv://foodshalauser:foodshala@foodshalacluster-xsd3l.mongodb.net/test?retryWrites=true&w=majority",{useUnifiedTopology:true,useNewUrlParser:true});

const db=mongoose.connection;


db.on('error',console.error.bind(console,"error in connecting to mongodb"));






db.once('open',function(){
    console.log('connected to database :: mongodb');
});

module.exports=db;



const mongoose= require('mongoose');
const URL="mongodb+srv://foodshalauser:foodshala@foodshalacluster-xsd3l.mongodb.net/test?retryWrites=true&w=majority";

 mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
 const db=mongoose.connection;
console.log('connected..');




module.exports=db;
*/
const mongoose= require('mongoose');

const URL ="mongodb+srv://jobout:jobout@jobout-cqnps.mongodb.net/test?retryWrites=true&w=majority";
const db=async() =>{
await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
console.log('connected..');
}



module.exports=db;

