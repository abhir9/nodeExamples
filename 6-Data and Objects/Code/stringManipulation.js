

var string1 = "The quick brown fox jumps over the \"lazy\" dog";
var string2 = " and lived happily ever after.";
var newString = string1 + string2;
// alert(newString);
var myArray = newString.split(" ");
// alert(myArray);

var indexOfBrown = newString.indexOf("brown");
var indexOfJumps = newString.indexOf("jumps");
var myFox = newString.slice(indexOfBrown, indexOfJumps);
alert(myFox);

