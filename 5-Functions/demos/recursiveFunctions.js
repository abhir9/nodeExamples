
function func1(num, exp){
     if (exp === 0) 
     {
        return 1;
     }
  return num * func1(num, exp-1);
}


function nonRecursiveFunc(num, exp){
  var retVal = 1;
  for ( var i = 0; i < exp; i++ )
  {
    retVal *= num;
  }
  
  return retVal;
}


var answer = nonRecursiveFunc(2,10);
output.innerHTML = answer;








