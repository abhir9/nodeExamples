
//var myString = "The quick brown fox jumps over the lazy dog";
//var offset = myString.search(/\b[a-z]{5}\b/);
// alert(offset);

var myString = "my zip is 01720-1234 what is yours?";
var offSet = myString.search(/\b[0-9]{5}(?:-[0-9]{4})?\b/);
alert(offSet);


