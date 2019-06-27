//classical js function
function greetClassical(){
    return 'Hellow world';
}
console.log(greetClassical());

//es6 fat arrow function
//function with single argument and single line in body
const greet = name => `hello ${name}`;

console.log(greet('ankit'));

//function with multiple arguments and multiple body lines

const greetarrow = (title, name) =>{
    return `hello ${title} ${name}, how are you?`;
}
console.log(greetarrow('Mr.','Ankit'));