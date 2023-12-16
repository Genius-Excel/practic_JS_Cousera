// This module contains a logic that solves the FIZZBUZZ problem.

// If a number is a multiple of 3, print Fizz.
// If a number is a multiple of 5, print Buzz.
// If a number is a multiple of both 3 and 5, print FizzBuzz.
// If a number is not a multiple of either 3 or 5, print the number.


number = 100;

var i; 

for (i = 0; i <= number; i++)
{
    if (i % 3 == 0 && i % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    else if (i % 5 == 0)
    {
        console.log("Buzz");
    }
    else if (i % 3 == 0)
    {
        console.log("Fizz");
    }
    else
    {
        console.log(i);
    }
}