import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../state/app.hooks";
import { TodoModel } from "../todo.model";
import { todoListFail, todoListLoading, todoListSuccess } from "../state/todomanagement.reducer";
import { todoService } from "../service/todo.service";


const TodoService = todoService;

const TodoListPage = () => {
    // Use store
    const dispatch = useAppDispatch();
    const todoListSelector = useAppSelector((state) => state.todoManage.data);

    const [todoList, setTodoList] = useState(todoListSelector);

    useEffect(() => {
        dispatch(todoListLoading());

        TodoService.all().then((response: any) => {
            console.log("Load Todo List successful with details: ", response);
            dispatch(todoListSuccess(response));
            setTodoList(response);
        }).catch((error: any) => {
            console.error("Load Todo List failed with details: ", error);
            dispatch(todoListFail(error));
        });
    }, [todoList]);



    const buildTableBody = todoList?.map((todo: TodoModel) =>
        <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.createdBy}</td>
            <td><a href="#!">Remove</a></td>
        </tr>
    );

    return (
        <table>
            <thead>
                <tr key="tableHeader">
                    <th>ID</th>
                    <th>Title</th>
                    <th>Created By</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {buildTableBody}
            </tbody>
        </table>
    );
}

export default TodoListPage;
