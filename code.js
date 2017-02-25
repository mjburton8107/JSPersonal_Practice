// var users = [];
//
// var user1 = {
//     name: 'Tyler McGinnis',
//     email: 'tylermcginnis33@gmail.com',
//     password: 'iLoveJavaScript',
//     username: 'infiniateLoop'
// };
//
// var user2 = {
//     name: 'Michael Burton',
//     email: 'michaelburton@gmail.com',
//     password: 'devmountain',
//     username: 'mjburton'
// };
//
// var user3 = {
//     name: 'Heidi Hawkins',
//     email: 'heidihawkins@gmail.com',
//     password: 'haynieandco',
//     username: 'theheids'
// };
//
// users.push(user1, user2, user3);
//
// for (var i = 0; i < users.length; i++){
//   if(users[i].email === 'tylermcginnis33@gmail.com'){
//     users.splice(i,1);
//   }
// }
//
// // console.log(users);
//
//
// // here is some practice from JS Fundamentals I and II video with Jeremy Robertson
//
// var coverBands = [
//   {
//     bandName: 'Tuneyards',
//     contact: 'dave@tuneyards.com',
//     covering: 'yardbirds'
//   },
//   {
//     bandName: 'Petty Theft',
//     contact: 'steve@petty.com',
//     covering: 'TomPetty'
//   },
//   {
//     bandName: 'Metalachi',
//     contact: 'arriche@wewannametalica.com',
//     covering: 'Metalica'
//   },
//   {
//     bandName: 'Led Zeppagain',
//     contact: 'mike@journagain.com',
//     covering: 'Journey'
//   },
//   {
//     bandName: 'Heartbreakers',
//     contact: 'breakers@breakers.com',
//     covering: 'TomPetty'
//   },
//   {
//     bandName: 'Arnel',
//     contact: 'Arnel@Arnel.com',
//     covering: 'Journey'
//   },
//   {
//     bandName: 'Meat Loaf',
//     contact: 'dameat@loafs.com',
//     covering: 'Journey'
//   },
// ]
//
// function countCoverBands(arrayOfCoverBands){
//   var bandCount = {};
//   for (var i = 0; i < arrayOfCoverBands.length; i++){
//     var bandName = arrayOfCoverBands[i].covering;
//     if(bandCount.hasOwnProperty(bandName){
//       bandCount[bandName++;
//     } else bandCount[bandName] = 1;
//   } return bandCount;
// }
//
// console.log(countCoverBands(coverBands));
//
//
// var expectedResult = {
//     yardbirds: 1,
//     TomPetty: 2,
//     Metalica: 1,
//     Journey: 3
// }
//




//palindrome problem from class


function isPalindrome(str){
  var newStr = str.replace(/\s/g, '');
  var strRevers = newStr.split('').reverse().join('');
  if(newStr.toLowerCase() === strRevers.toLowerCase()){
    console.log('true');
  } else{
    console.log('false');
  }
}

isPalindrome('Marge let a moody baby doom a telegram');


/*go through numbers to 100; if divisible by 3 console log 'Fizz'
if divisible by 5 console log 'Buzz'
if divisible by both 3 & 5 console log 'FizzBuzz'*/

/*function counter(){
  for (var i = 0; i <= 100; i++){
    if(i%3 === 0 && i%5 === 0){
      console.log('FizzBuzz');
    } else if(i%3 === 0){
      console.log('Fizz')
    } else if(i%5 === 0){
      console.log('Buzz')
    } else {
      console.log(i);
    }
  }
}

counter();*/


//class problem on Feb 4

var myArray = [];

function checkCondition(condition1, condition2, condition3){
  if(condition1){
    myArray.push('savings');
  } if (condition2){
    myArray.push('debt');
  } if (condition3){
    myArray.push('retirement');
  } return myArray;
}

checkCondition(true, false, true);
console.log(myArray);

//filter practice; makes a new array

var animals = [
{
  name: 'monkey',
  isMammal: true
},
{
  name: 'cat',
  isMammal: true
},
{
  name: 'dragon',
  isMammal: false
},
{
  name: 'snake',
  isMammal: false
},
]

var noMammals = animals.filter(function(animal){
  return !animal.isMammal;
})

console.log(noMammals);

//forEach loops (over vanilla for loop) the two things below print the exact same thing
var arr = ['mark', 'luke'];

for (var i = 0; i < arr.length; i++){
  console.log(arr[i], i);
}

arr.forEach(function(item, index){
  console.log(item, index)
})

//factorial problem (Feb 23,2017)

var factorial = function(num){
  var total = 1;
  for (var i = 1; i <= num; i++){
    total *= i;
  }
  return total
}

console.log(factorial(5));

//roman numeral problem (Feb 23,2017)

function romanNumeralConvertor (romNum){
   if (romNum === "IV"){
     return 4;
   } else if (romNum === "IX"){
     return 9;
   } else

   var total = 0;
   var newArray = romNum.split('');

  for (var i = 0; i < newArray.length; i++){
    if (newArray[i] === "I"){
      total += 1;
    } if (newArray[i] === "V"){
      total += 5;
    } if (newArray[i] === "X"){
      total += 10;
    }
  }
  return total;
}

console.log(romanNumeralConvertor("IX"));

//class version done by Luke
// function arrayMinuser (array){
//   var result = array[array.length - 1];
//
//   for (var i = array.length - 2; i >= 0; i--){
//     result = result - 1
//   }
// }
//
// function arrayPlus (array) {
//   var result = 0;
//
// }
//
//
// function romanNum(rn){
//
//   var romanNumeralMapper = {
//     I : 1,
//     V: 5,
//     X: 10,
//   }
//
//   var rnArray = rn.split('');
//
//   var numArray = rnArray.map(function(romanNumberItem){
//     return romanNumeralMapper[romanNumberItem]
//   })
//
//   if(numArray[numArray.length-1] === 1){
//     return
//   }
//
//
// }


//problem from CodeCardio about finding the longest word in an array

//Complete the function longestWord to take in a sentence and return the longest word in the sentence. Assume that there will not be a tie for the longest word.

function longestWord(sen) {
  var newArray = sen.split(' ');
  console.log(newArray);
  var longest = '';
  for (var i = 0; i < newArray.length; i++){
    if(newArray[i].length > longest.length){
      longest = newArray[i];
    }
  }
  return longest;
}

longestWord("I am looking for the longest word in this reallylongwordevenlonger");

/*Have the function exOh(str) take the str parameter being passed and return true if there is an equal number of x's and o's, otherwise rfalse.
Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo"
then the output should return false because there are 6 x's and 5 o's.*/

function exOh(str) {
  var newArray = str.split('');
  var countXs = 0
  var countOs = 0
  for (var i = 0; i < newArray.length; i++){
    if(newArray[i] == 'x'){
      countXs++;
    } else if(newArray[i]== 'o'){
      countOs++;
    }
  }
  if(countOs === countXs){
    return true;
  } else return false;
}

exOh("xooxxxooxox");

/*Finish the function missingNo so that it takes in a sorted array of integers which contains all integers
between 0 and N except one value, and returns the missing integer in that array.

Example: if you are passed [0,1,2,3,5], this is an array between 0 and 5, it is sorted.
However, the number 4 is missing. Your function needs to return 4.*/

var numberFinder = function(arr){
  for (var i = 1; i < arr.length; i++){
    if(arr[i] - arr[i-1] != 1){
      return arr[i] - 1;
    }
  }
}

numberFinder([0,1,2,3,5]);

/*Write a function called teamWin that will be passed into the teamTrack function as a callback, along with an object
representing the winning team and an object representing the losing team. In the teamWin function,
increment the winning teams wins by one, and increment the losing teams losses by one.*/

var seahawks = {
  	name: "Seahawks",
	wins: 0,
	losses: 0
}

var eagles = {
  	name: "Eagles",
	wins: 0,
	losses: 0
}
/**** Do not edit the above objects *****/


var teamWin = function(winTeam, loseTeam){
  winTeam.wins++;
  loseTeam.losses++;
}


/**** Do not edit the function below ****/
var teamTrack = function(winTeam, loseTeam, callback){
	callback(winTeam, loseTeam)
}

//Write a function named callbackFunc that takes in two numbers and a callback function, and returns the result of the callback function being executed with the two numbers.

//DON'T CHANGE THIS CODE
function adder(x, y) {
    return x + y;
}

function subtractor(x, y) {
    return x - y;
}

function multiplier(x, y) {
    return x * y;
}

var callbackFunc = function(x, y, cb){
  return cb(x, y);
}



//DON'T CHANGE THIS EITHER pls
var x = callbackFunc(2, 3, adder); // x = 5
var y = callbackFunc(5, 2, subtractor); // y = 3
var z = callbackFunc(3, 6, multiplier); // z = 18

console.log(x);
console.log(y);
console.log(z);
