// Constructor function , Pre classes

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
console.log(person2.firstName);
console.log(person3.Dob);
console.log(person4);

// Class function 

class Person5 {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = dob
    }
    getFullName() {
        return `{this.firsName} ${this.lastName}`
    }
}
const person6 = new Person('Bob', 'Dillon', '03111974')
console.log(person6);