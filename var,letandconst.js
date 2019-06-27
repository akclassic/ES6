/*
1.var is functional scoped
2.hoisting is a property of var
*/

/*
var title = "let and const ";

function fun(){
    console.log(filename);
    var filename = "ankit";
}
fun();
*/

/*
outPut: undefined
this behaviour is due to hoisting of the var variables
the variables declared with the var keyword are hosted on the top of there scope there
fore the outuput is undefined istread of refernceerror
*/

/* 2nd example


'use strict';
title = "let and const tutorial";
console.log(title);
// var title;

//if we use 'use strict' i.e strict mode then this this expample will produce
//ReferenceError: title is not defined
*/

/*
3rd example
//1. var is not block scoped therefore any declaration inside a block are accessible 
//outside the block scope
if(5 === 5){
    var name = 'Ankit';
}

console.log(name);
*/

/*
//1. let is block scoped
if(5 === 5){
    let name = 'Ankit';
}

console.log(name);
//Output : reference error : name is not defined
*/

/*
3rd. Const
*/

//1. assingnment to a constant variable is not allowd
const PI = 3.14;
// PI = 22/7; not allowed
console.log(PI);

//2. we can modify the contents of reference type variables but we cannot modify the 
//refernce itself
//example
const fruits = ['apple','mango','banana','grapes'];
//allowed operation
fruits.push('oranges');
// console.log(fruits);
//not allowd
/*fruits = ['pineapple','babbu bhusha'];
// output:
// TypeError: Assignment to constant variable.
*/

const game = {
    title: 'PUBG lite',
    releaseYear: '2019',
    price: 'free free free'
};

//allowed
game.price = 'free'
/*
//not allowed
game = {
    title: 'Pubg Mobile'
}
// output:
// TypeError: Assignment to constant variable.
*/

console.log(price);




