var age = Number(prompt("What is your age? ", ""));

var string = "";
for ( var theAge = age; theAge > 0; theAge -= 1)
{
    string += "Happy Birthday\n";
}

alert(string);



