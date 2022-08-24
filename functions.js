function myFunction (){
    for (let i =0; i < 100; i++) {
        console.log(i);
    }
}

myFunction();


//firstName and lastName are the parameters for this function
//the unique entries are the arguments
/*
function createFullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}

createFullName('sarah', 'schmid');
*/


//return nothing will be printed out in the console
/*
function createFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

console.log (createFullName('sarah', 'schmid'));

*/

function createFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

var fullName= createFullName('sarah', 'schmid');

console.log('Welcome ' + fullName);







function returnSum(num1, num2, num3) {
    console.log(returnSum(2,3));
}


