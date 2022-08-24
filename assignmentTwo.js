//Q1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages);

//a. Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.

let last = ages[ages.length-1]
console.log(last);

let first = ages.shift();
console.log(first);

let lastMinusFirst = (last - first);

console.log(lastMinusFirst);

 
//b. Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

ages.push(28);

console.log (lastMinusFirst);

//c.Use a loop to iterate through the array and calculate the average age. Print the result to the console.


//Q2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

console.log(names);

//b.Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.


let namesString = 0;
for (let i = 0; i < names.length; i++) {
    namesString += names[i];
}

console.log(namesString.length/names.length)


//c.Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.


let namesStringWithSpaces = '';
for(let i = 0; i < names.length; i++){
  namesStringWithSpaces += names[i]
} 

console.log(namesStringWithSpaces);


//Q3. How do you access the last element of any array?

let testArray = [1, 2, 3, 4];

testArray[testArray.length-1]

//Q4. How do you access the first element of any array?

testArray.shift();

//Q5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.For example:


var nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length)
}

console.log(nameLengths)


