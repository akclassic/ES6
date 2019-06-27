// classical js example

/*
var numbers = [1,2,3,4,5,6,7];
var sum =0;
for(var i=0;i<numbers.length;i++){
    sum+=number[i];
}
console.log('sum using classical for loop',sum);
*/

const numbers = [1,2,3,4,5,6,7];

/*
//es6 reduce helper for generating sum of elements of an interger array

const sum = numbers.reduce( (sum, number)=> sum+number,0);
console.log('sum using reduce helper: ',sum);
*/

//generating product
/*
const product = numbers.reduce( (product, number) => product * number,1);
console.log('product using reduce helper: ',product);
*/

const developers = [
    { name: 'Ankit', workedHours: 15},
    { name: 'AMit', workedHours: 14},
    { name: 'Jeet', workedHours: 13},
    { name: 'Dev', workedHours: 12}
];

//classical js example
/*
var workedHours = [];
for(var i=0; i<developers.length;i++){
    workedHours.push(developers[i].workedHours);
}

console.log('worked Hours using for loop: ', workedHours);
*/

//uisng map helper

/*
const workedHours = developers.map((developer)=> developer.workedHours);
console.log('worked hours using map helper: ', workedHours);
*/

//using reduce helper
const workedHours = developers.reduce( (workedHours ,developer)=> {
    workedHours.push(developer.workedHours);
    return workedHours;
},[]);

console.log('worked hours using reduce helper: ', workedHours);

