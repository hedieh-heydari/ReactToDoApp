import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./TodoList";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    return (

        <div className="container">
            <ToDoForm />
            <ToDoList />
        </div>
    );
}

export default TodoApp;
