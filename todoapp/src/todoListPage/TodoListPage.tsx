
const todos = [
    { id: 1, title: "Listen to music", createdBy: "Owner 1" },
    { id: 2, title: "Do exercise", createdBy: "Owner 2" },
    { id: 3, title: "Go hangout", createdBy: "Owner 3" },
    { id: 4, title: "Reading a book", createdBy: "Owner 2" },
];

const TodoListPage = () => {


    const buildTableBody = todos.map(todo =>
        <tr>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.createdBy}</td>
            <td><a href="#!">Remove</a></td>
        </tr>
    );

    return (
        <table>
            <th>ID</th>
            <th>Title</th>
            <th>Created By</th>
            <th>Action</th>
            <tbody>
                {buildTableBody}
            </tbody>
        </table>
    );
}

export default TodoListPage;
