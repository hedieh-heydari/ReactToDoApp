import { useState } from "react";
import Todo from "./Todo";
import ToDoForm from "./ToDoForm";

const ToDoList = ({ todos, onComplete, onDelete, onUpdateTodo }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const editTodo = (newValue) => {
    onUpdateTodo(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };

  const renderTodos = () => {
    if (todos.length === 0) return <p>add todo!</p>;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onComplete={() => onComplete(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };

  return (
    <div>
      {edit.id ? <ToDoForm submitTodo={editTodo} edit={edit} /> : renderTodos()}
    </div>
  );
};

export default ToDoList;
