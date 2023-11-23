import { axiosInstance } from "../../api/axiosInstance";
import { TodoModel } from "../todo.model";

const EMPTY = "";

class TodoService {

    all(): Promise<any> {
        return axiosInstance
            .get("/todos")
            .then(response => response.data)
            .catch(error => error)
    }
    

    add(todoModel: TodoModel): Promise<any> {
        console.log("Create a Todo Item: ", todoModel);
        if (todoModel.title !== null || todoModel.title !== EMPTY) {
            return axiosInstance
                .post("/todos", todoModel)
                .then(response => response)
                .catch(error => error)
        }
        return Promise.reject({errorMessage: "Title field must not be empty!"});
    }
}

const todoService = new TodoService();

export {todoService};
