//Problem 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars
//Predict the output
console.log(randomCar) //It will log Tesla
console.log(otherRandomCar) //it will log Mercedes

//Problem 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); // this will give an error for it not being defined
console.log(otherName); //Logs Elon

//Problem 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output
console.log(password); //Logs '12345'
console.log(hashedPassword); // Even tho its properly passing the value due to password already being used password is undefined

//Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output
console.log(first == second);//Its false because they dont match 
console.log(first == third); // True 2=2

//Problem 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key); //Logs the array
console.log(secondKey); // logs 1
console.log(secondKey[0]); //this wont work for it not properly being set in a variable
console.log(willThisWork); //logs 5






