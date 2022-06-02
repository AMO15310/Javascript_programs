//Creating a variable and setting it to 293 k
const kelvin = 23
//Converting kelvin to celcius and storing in a variable
const celsius =(kelvin-273);
let Newton = celsius * (33/100);
Newton = Math.floor(Newton);
//Fahrenheits are calculated and stored in the variable
let Fahrenheit =(celsius*(9/5)+32)
//This is to round down the decimal got when calculating 
Fahrenheit = Math.floor(Fahrenheit);
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`)
console.log(`Temperature in newtons is ${Newton}`)



