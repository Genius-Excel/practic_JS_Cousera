// This file contains the implementation of elements and arrays.

my_array = ["Orange", "Grapes", "Banana", "Mangoes"]

console.log(my_array.length);

console.log(`element at index 0 of my_array is ${my_array[0]}`);
console.log(`Element at index 1 in my_array is ${my_array[1]}`);
console.log(`Element at index 2 in my_arrays is ${my_array[2]}`);
console.log(`Element at index 3 in my_array is ${my_array[3]}`);


// Iterating through the elements of an array.

var i;

var arr_len;

arr_len = my_array.length;

// This for loop will print all the elements present in my_array.

for (i = 0; i < arr_len; i++)
{
    console.log(my_array[i]);
}


// This is a while loop that prints all elements present in my_array.

var j;

j = 0;

while (j < arr_len)
{
    console.log(`Elelement at index ${j} in my_array \n printed with a while loop is ${my_array[j]}`);
    j += 1;
}