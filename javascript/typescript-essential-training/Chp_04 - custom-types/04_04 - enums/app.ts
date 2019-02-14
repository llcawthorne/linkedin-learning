interface Todo {
    name: string;
    state: TodoState;
}

enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}

var todo: Todo = {
    name: "Pick up drycleaning",
    state: TodoState.New
}

function delete(todo: Todo) {
    if(todo.state != TodoState.Complete) {
        throw "Can't delete incomplete task!"
    }
}