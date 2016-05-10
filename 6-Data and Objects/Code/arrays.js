
var empty = [];
empty[0] = 1;
empty[1] = 2;
//alert(empty);

var primes = [1, 2, 3, 5, 7, 11];
var thirdPrime = primes[2];
//alert(thirdPrime);

var myArray = [1, "hello", false];
var truth = myArray[2];
//alert(truth);
var myArrayLength = myArray.length;
//alert(myArrayLength);

function range(max){
    var retVal = [];
    for ( var i = 0; i < max; i++ )
    {
        retVal[i] = i * 2;
    }
    return retVal;
}

alert(range(5));


