// this file is a simple loop shows that a string is also an array
var i;

var text; 

text = "Hello World";

var string_len;

string_len = text.length ();

for (i = 0; i  < string_len; i++)
  {
        console.log(`length of string is: ${i}`);
    
        console.log ("True, string is also an array in JavaScript");

        console.log ("the input text" + text + "is indeed an array");
  }
  
