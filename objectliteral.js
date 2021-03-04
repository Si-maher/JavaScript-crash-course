// Key value pairs 

const person = {
    firstName : 'John',
    lastName : 'Doe',
    age : 32,
    hobbies : ['gym', 'running', 'swimming'],
    address : {
        street: '1 main street',
        city : 'Boston',
        state : 'MA'
    }
}

console.log(person.hobbies[1]);
console.log(person.address.city);

// Array of Objects 

const todos = [
    {
        id : 1,
        text : 'Take out trash',
        isCompleted : true

    },
    {
        id : 2,
        text : 'Meeting with Boss',
        isCompleted : true

    },
    {
        id : 3,
        text : 'Dentist appointment',
        isCompleted : false

    }
]
console.log(todos[1].text);