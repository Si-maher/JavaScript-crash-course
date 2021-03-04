
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
for(let i = 0; i < 10; i++){
    console.log(`For loop number ${i}`);
}

let j = 0
while(j < 10){
    console.log(`WHile loop number ${j}`);
    j++
}

for(let todo of todos) {
    console.log(todo.text);
}

todos.forEach(function(todo) {
    console.log(todo.id);
})

const todoText = todos.map(function(todo) {
    return todo.isCompleted
})
console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true
}).map(function(todo) {
    return todo.text
})
console.log(todoCompleted);