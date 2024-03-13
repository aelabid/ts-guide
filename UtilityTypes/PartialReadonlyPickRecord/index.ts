interface Todo {
    title: string;
    description: string;
}

function updateTodoFields(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate };
}


const todo1: Readonly<Todo> = {
    title: "first todo title",
    description: "..."
};

const updatedTodo = updateTodoFields(todo1, { title: "Update todo title" });

console.log(updatedTodo); 


type User = Readonly<{
    name: string;
    age: number;
}>;
const user: User = {
    name: "John",
    age: 30
};

// user.name = "Jane"; Cannot assign to 'name' because it is a read-only property.ts(2540)
