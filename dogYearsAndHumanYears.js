//input your age in the variable named my age
var myAge = 18;
//earlyYears are the first 2 years in your age 
let earlyYears = 2;
earlyYears *=2;
//since we have already accounted for the first 2 years we subtract it from my Age
let laterYears = myAge - 2;
//Now we multiply the later years by 4 to calculate number of dog years accounted by the variable
laterYears *=4;
//console.log(earlyYears);
//console.log(laterYears);
//Adding the early years and the later years and assigning  it to another variable
var myAgeInDogYears = earlyYears + laterYears;
//Declaring your name and setting it to a variable named myName
var myName = ('Amos Wachira').toLowerCase()
//Printing out your name and years in both human and dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years `)
