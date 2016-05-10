

function range(max){
    var retVal = [];
    for ( var i = 0; i < max; i++ )
    {
        retVal.push(i * 2); 
    }

    return retVal;
}

var myArray = range(5);
for ( var i = 0; i < myArray.length; i++ )
{
    alert(myArray[i]);
}



