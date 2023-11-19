import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../state/app.hooks";
import { todoService } from "../service/todo.service";
import { todoCreateFail, todoCreateLoading, todoCreateSuccess } from "../state/todomanagement.reducer";
import { TodoModel } from "../todo.model";


const TodoService = todoService;

const TodoCreateForm = () => {
    const [todoModel, setTodoModel] = useState({
        id: 0,
        title: null,
        createdBy: null,
    });

    // Use store
    const dispatch = useAppDispatch();
    const authSelector = useAppSelector((state) => state.auth.payload);
    const todoListSelector = useAppSelector((state) => state.todoManage.data);

    const nextId = todoListSelector.length + 1;

    // set initial todo form when loading this page successful
    useEffect(() => {
        if (authSelector.isAuthenticated) {
            setTodoModel((prev) => ({
                ...prev,
                createdBy: authSelector.username
            }));
        }
    }, [authSelector.isAuthenticated, authSelector.username]);

    const handleCreateSubmit = (todoModel: TodoModel) => {
        dispatch(todoCreateLoading());

        TodoService.add(todoModel)
            .then((response: any) => {
                console.log("Create a todo successful with details: ", response);
                dispatch(todoCreateSuccess(response));
                return response;
            })
            .catch((error: any) => {
                console.error("Create a todo failed with details: ", error);
                dispatch(todoCreateFail(error));
            });
    };


    const handleUpdateTodoModel = (e: any) => {
        setTodoModel((prev) => ({
            ...prev,
            title: e.target.value,
            id: nextId
        }));
    };

    return <div>
        <div>
            <label>Title:</label>
            <input title="Type todo's title here!" type="text" onChange={(e) => handleUpdateTodoModel(e)} />
        </div>
        <button onClick={() => handleCreateSubmit(todoModel)}>Save</button>
    </div>
}

export default TodoCreateForm;
