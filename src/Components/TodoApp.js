import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./TodoList";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (input) => {
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            text: input,
            isCompleted: false
        };
        setTodos([...todos, newTodo])
        console.log(todos)
    }
    const completeTodo = (id) => {
        const index = todos.findIndex(todo => todo.id === id)
        const selectedTodo = { ...todos[index] };
        selectedTodo.isCompleted = !selectedTodo.isCompleted;
        const updatedTodos = [...todos];
        updatedTodos[index] = selectedTodo;
        setTodos(updatedTodos);

    }
    return (
        <div className="container">
            <ToDoForm addTodoHandler={addTodoHandler} />
            <ToDoList todos={todos} onComplete={completeTodo} />
        </div>
    );
}

export default TodoApp;
