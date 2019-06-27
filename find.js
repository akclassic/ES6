//classical JS
/*
var persons = [
    { name: 'Ankit' , aadharno: '00000', favoriteFood: 'kheer'},
    { name: 'Amit' , aadharno: '00001', favoriteFood: 'chole Bhature'},
    { name: 'Jeet' , aadharno: '00010', favoriteFood: 'chiken tanduri'},
    { name: 'Dev' , aadharno: '00011', favoriteFood: 'momos'},
    { name: 'Ankit' , aadharno: '00100', favoriteFood: 'dosa'}
];

//find the object 
var account;
for(var person = 0; person<persons.length; person++){
    if(persons[person].name==='Ankit'){
        account = persons[person];
        //break;
    }
}
console.log(account);
*/

const persons = [
    { name: 'Ankit' , aadharno: '00000', favoriteFood: 'kheer'},
    { name: 'Amit' , aadharno: '00001', favoriteFood: 'chole Bhature'},
    { name: 'Jeet' , aadharno: '00010', favoriteFood: 'chiken tanduri'},
    { name: 'Dev' , aadharno: '00011', favoriteFood: 'momos'},
    { name: 'Ankit' , aadharno: '00100', favoriteFood: 'dosa'}
];

let account;
account = persons.find( person => person.name === 'Ankit');
console.log(account);