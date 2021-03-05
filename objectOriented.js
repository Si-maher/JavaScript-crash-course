// Constructor function 

function Person (firstName, lastName, Dob){
    this.firstName = firstName
    this.lastName = lastName
    this.Dob = Dob
}

// Instantiate object
const person1 = new Person('John', 'Doe','3.04.1990')
const person2 = new Person('Bob', 'Doe','3.04.1990')
const person3 = new Person('Jez', 'Doe','3.04.1990')
const person4 = new Person('Dave', 'Doe','3.04.1990')

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);