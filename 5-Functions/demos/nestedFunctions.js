function hypotenuse()
{
  var side1 = 3;
  var side2 = 5;
 
 function squareSide1() 
 {
   return side1 * side1;
 }
 
 function squareSide2()
 {
   return side2 * side2;
 }
 
 return squareSide1() + squareSide2();
}

var hyp = hypotenuse();
alert(hyp);








