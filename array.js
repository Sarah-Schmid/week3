var customerNames = [];

customerNames.push('Sam Smith');
customerNames.push('Tom Frank');


//fo loop to print all the names out in order:
for (let i = 0; i < customerNames.length; i++){
    console.log(customerNames[i])
}

//for of loop to print all the names out in order:
for (name of customerNames){
    console.log(name)
}