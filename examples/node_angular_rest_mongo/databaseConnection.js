var mongoose=require('mongoose');
var database=mongoose.connect('mongodb://localhost:27017/demo',function(err){
  if(err)
  console.log(err);
  else {
    console.log('connected successful');
  }
});
module.export=database;
