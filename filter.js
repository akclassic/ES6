//classical js example

//array of developers
/*
var developers = [
    {name: 'Ankit', language: 'JavaScript'},
    {name: 'Udit', language: 'Python'},
    {name: 'Anamika', language: 'Java'},
    {name: 'Kartike', language: 'AI&ML'},
    {name: 'Pradeep Sir', language: 'You Know'},
    {name: 'Sanket', language: 'JavaScript'},
];

var potentialHires =[];

for(var developer=0; developer<developers.length; developer++){
    if(developers[developer].language === 'JavaScript'){
        potentialHires.push(developers[developer]);
    }
}
console.log('Potential Hires: ',potentialHires);
*/

//es6 filter


const developers = [
    {name: 'Ankit', language: 'JavaScript', yearsExp: 1, hourly: 10},
    {name: 'Udit', language: 'Python', yearsExp: 2, hourly: 11},
    {name: 'Anamika', language: 'Java', yearsExp: 3, hourly: 12},
    {name: 'Kartike', language: 'AI&ML', yearsExp: 2, hourly: 15},
    {name: 'Pradeep Sir', language: 'You Know', yearsExp: 15, hourly: 100},
    {name: 'Sanket', language: 'JavaScript', yearsExp: 1, hourly: 10}
];
/*
const potentialHires = developers.filter( developer => developer.language === 'JavaScript');
console.log('Potential Hires: ',potentialHires);
*/

const potentialHires = developers.filter(developer => {
    return developer.language === 'JavaScript' 
    && developer.yearsExp < 2
    && developer.hourly < 100
});

console.log('Potential Hires: ', potentialHires);