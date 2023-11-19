import { TodoModel } from "../todo.model";

let initialTodoList: TodoModel[] = [
    { id: 1, title: "Listen to music", createdBy: "Owner 1" },
    { id: 2, title: "Do exercise", createdBy: "Owner 2" },
    { id: 3, title: "Go hangout", createdBy: "Owner 3" },
    { id: 4, title: "Reading a book", createdBy: "Owner 2" },
];

const EMPTY = "";

class TodoService {

    all(): Promise<any> {
        return Promise.resolve(initialTodoList);
    }
    

    add(todoModel: TodoModel): Promise<any> {
        console.log("Create a Todo Item: ", todoModel);
        if (todoModel.title !== null || todoModel.title !== EMPTY) {
            const todoList = [
                ...initialTodoList,
                todoModel
            ];
            return Promise.resolve(todoList);
        }
        return Promise.reject({errorMessage: "Title field must not be empty!"});
    }
}

const todoService = new TodoService();

export {todoService};
