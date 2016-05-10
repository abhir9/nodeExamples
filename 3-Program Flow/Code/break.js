var age = Number(prompt("What is your age? ", ""));

var string = "";
for ( var counter = 1; counter < age; counter += 1)
{
    string += "Happy Birthday\n";
    if (counter % 7 == 0)
        break; 
}

alert(string);



