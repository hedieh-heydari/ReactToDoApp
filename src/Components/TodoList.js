import { useState } from "react";
import Todo from "./Todo";
import ToDoForm from "./ToDoForm";
import { Alert } from "reactstrap";

const ToDoList = ({ todos, onComplete, onDelete, onUpdateTodo }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const editTodo = (newValue) => {
    onUpdateTodo(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };

  const renderTodos = () => {
    if (todos.length === 0)
      return <Alert className="px-5">Nothing to do, Enjoy your Day!</Alert>;

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
