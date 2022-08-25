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

//Q6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.


let sum = 0;

for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}
console.log(sum);

//Q7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function wordN (word, n) {
let wordN = '';

while (n > 0) {
  wordN += word;
  n--;
}
return wordN;
}

console.log(wordN('hello',3));

//Q8. Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
 
function fullName (firstName, lastName) {
  return firstName + ' ' +lastName;
}

console.log(fullName('sarah', 'schmid'));

//Q9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let myArray = [3, 9, 23, 64, 2, 8, 28, 93];

function returnTrueIfOver100(arraysum) {
let add = 0;
  for (let i = 0; i < arraysum.length; i++) {
    add += arraysum[i]; }
    if (add >= 100) {
     return true; }
}

      console.log(returnTrueIfOver100(myArray))

//Q10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

function averageArrayValue(arr){
  let addForAverage = 0;
    for (let i = 0; i < arr.length; i++) {
      addForAverage += arr[i];
    }
      return(addForAverage/arr.length); 
}

console.log(averageArrayValue(myArray))


//Q11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let comparisionArray1 = [4, 45, 7, 2];
let addForAverageComparison1 = 0;
let comparisionArray2 = [5, 45, 7, 2];
let addForAverageComparison2 = 0;


for (let i = 0; i < comparisionArray1.length; i++) {
  addForAverageComparison1 += comparisionArray1[i];
  }

for (let i = 0; i < comparisionArray2.length; i++) {
    addForAverageComparison1 += comparisionArray2[i];
    }

function arrayComparison (array1,array2) { if (array1> array2) {
 return true; }}

console.log(arrayComparison (addForAverageComparison1/comparisionArray1.length, addForAverageComparison2/comparisionArray2.length) );

//Q12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside,moneyinPocket) {
  if (isHotOutside==true && moneyinPocket >= 10.5) {return true;}
}
console.log(willBuyDrink(true,11));

//Q13. Write a function that takes an array of numbers and returns the value of first element multiplitied by the last element.

function firstTimesLast(arr) {
  return arr[arr.length-1] * arr.shift()
}

console.log(firstTimesLast(myArray));

