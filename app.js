/* Given this function:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
Refactor it to use the rest operator & an arrow function: */
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function (num) {
        return num % 2 === 0
    });
}
function filterOutOdds2(...nums) { return nums.filter(num => num % 2 === 0) }

//********************************************************************* */
/* findMin
Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator.

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1 */

const findMin = (...nums) => { return nums.sort((a, b) => a + b)[0] };
findMin(...arr1);

//********************************************************************* */

/* mergeObjects
Write a function called mergeObjects that accepts two objects and returns a new object 
which contains all the keys and values of the first object and second object.

mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4} */
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergeObjects = (a, b) => { return ({ ...a, ...b }) };
mergeObjects(obj1, obj2);

//********************************************************************* */

/* doubleAndReturnArgs
Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
The function should return a new array with the original array values and all of additional arguments doubled.

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8] */

const doubleAndReturnArgs = (arr, ...values) => {
    const doubValues = values.map((ele) => ele * 2);
    const newArr = [...arr, ...doubValues];
    return newArr;
}

//********************************************************************* */

/* Slice and Dice!
For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

Make sure that you are always returning a new array or object and not modifying the existing inputs. */

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    const randomIdx = Math.floor(Math.random() * items.length);
    const newArr = [...items];
    newArr.splice(randomIdx, 1);
    return newArr;
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    const newObj = { ...obj };
    newObj[key] = val;
    return newObj
}




/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newObj = { ...obj }
    delete newObj[key];
    return newObj;

}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => { return { ...obj1, ...obj2 } }


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    const newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}

//******************************************************* */3
// OBJECT ENHANCEMENTS ************************************//
/*function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  } */

const createInstructor = (firstname, lastname) => { return { firstname, lastname } };

/* COMPUTED PROPERTY NAMES
var favoriteNumber = 42;

var instructor = {
firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!" */
const favoriteNumber = 42;
const instructor = {
    firstname: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

/* OBJECTS METHODS
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName " + "says bye!";
  }
} */
const instructor2 = {
    firstName: "Colt",
    sayHi() {
        return "Hi!"
    },
    sayBye() {
        return this.firstName + " says bye!"
    }
}


/* Write a function which generates an animal object. The function should accepts 3 arguments:

species: the species of animal (‘cat’, ‘dog’)
verb: a string used to name a function (‘bark’, ‘bleet’)
noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
Use one or more of the object enhancements we’ve covered. */


const MyAnimal = (species, verb, noise) => {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}
/* **********************DESTRUCTURING EXERSICES ****************
Object Destructuring 1
What does the following code return/print?

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846


Object Destructuring 2
What does the following code return/print?

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

Object Destructuring 3
What does the following code return/print?

function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"})
// Your name is Alejandro and you like purple

getUserData({firstName: "Melissa"})
// Your name is Melissa and you like green

getUserData({})
// Your name is undefined and you like green


Destructuring Exercise
Object Destructuring 1
What does the following code return/print?

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846
Object Destructuring 2
What does the following code return/print?

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears);
// {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
Object Destructuring 3
What does the following code return/print?

function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"})
// Your name is Alejandro and you like purple

getUserData({firstName: "Melissa"})
// Your name is Melissa and you like green

getUserData({})
// Your name is undefined and you like green
Array Destructuring 1
What does the following code return/print?

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi


Array Destructuring 2
What does the following code return/print?

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "whiskers on kittens"
console.log(aFewOfMyFavoriteThings);
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]


Array Destructuring 3
What does the following code return/print?

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10,30,20]


ES2015 Refactoring
In this exercise, you’ll refactor some ES5 code into ES2015.

ES5 Assigning Variables to Object Properties
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;

ES2015 version:

const {numbers:{a, b}} = obj.numbers;

ES5 Array Swap
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
ES2015 One-Line Array Swap with Destructuring
[arr[0], arr[1]] = [arr[1], arr[0]]

raceResults()
Write a function called raceResults which accepts a single array argument. 
It should return an object with the keys first, second, third, and rest.

first: the first element in the array
second: the second element in the array
third: the third element in the array
rest: all other elements in the array
Write a one line function to make this work using
An arrow function
Destructuring
‘Enhanced’ object assignment (same key/value shortcut)*/
const raceResults = ([firts, second, third, ...rest]) => ({ first, second, third, rest })



//*********************************************************** */
/* Maps and Sets Exercise

« Back to Homepage

Quick Question #1
Quick Question #2
Quick Questions #3
hasDuplicate
vowelCount
Maps and Sets Exercise
Quick Question #1
What does the following code return?

new Set([1,1,2,2,3,4]) // {1,2,3,4}
Quick Question #2
What does the following code return?

[...new Set("referee")].join("") // "ref"
Quick Questions #3
What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);


{Array(3) => true}
{Array(3) => false}

hasDuplicate
Write a function called hasDuplicate which accepts an array and returns 
true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false */

const hasDuplicate = (arr) => {
    const mySet = new Set([...arr]);
    return (arr.length === mySet.size);
}

/* vowelCount
Write a function called vowelCount which accepts a string and returns a map 
where the keys are numbers and the values are the count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 } */
const vowelCount = (str) => {
    const result = new Map();
    const vowels = "aeiou";
    for (let i = 0; i < str.length; i++) {
        let char = str.toLowerCase()[i];
        if (vowels.includes(char)) {
            let count = 0;
            for (let cha of str) {
                if (cha === char) {
                    count++;
                }
            }
            if (str.indexOf(char) === i) {
                result.set(char, count);
            }
        }
    }
    return result;
}
