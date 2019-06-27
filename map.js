//classical js example
/*
var numbers = [2,4,6,8,10];
var changedNumbers = [];

for(var number=0;number<numbers.length;number++){
    // numbers[number] = numbers[number] * 2;
    changedNumbers.push(numbers[number] * 2); 
}

console.log('numbers: ',numbers);
console.log('Changed Numbers: ', changedNumbers);
*/

//es6 example
/*
const numbers = [2,4,6,8,10];
const changedNumbers = numbers.map(number=> number*2);

console.log('numbers: ', numbers);
console.log('changedNumbers: ',changedNumbers);

*/

const airlinesData = [
    {carrier: 'JetAirways', destination: 'Sweden', price: 15000},
    {carrier: 'IndianAirways', destination: 'Poland', price: 13000},
    {carrier: 'Luftansa', destination: 'Swizzterland', price: 15400},
    {carrier: 'Qatar', destination: 'Bali', price: 12000}
]

//have an array of prices
const prices = airlinesData.map( data => data.price);
console.log('price are: ', prices);