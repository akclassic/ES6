const name = 'John';
const title = 'Web Developer';
const salary = 100000;

/*
const developer = {
    name,
    title,
    salary: 130000,
    print(){
        console.log(`My name is: ${this.name} and my title is ${this.title}`);
    }
}

developer.print();
*/

//dynamic field
let dynamicField = 'title';

const developer = {
    name,
    [dynamicField] : title,
    salary,
    print(){
        console.log(`My name is: ${this.name} and my title is: ${this.title}`);
    }
}

console.log(developer);