var path = require('path');
module.exports.index=function(req, res){
res.sendFile(path.join('F:/MEAN/trial exercise MEAN/app_server/view/index.html'));
//res.end();
console.log('this is in main 2 controller');
};
 
