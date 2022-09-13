import { useState } from "react";
import Todo from "./Todo";
import ToDoForm from "./ToDoForm";
import { Card } from "reactstrap";

const ToDoList = ({ todos, onComplete, onDelete, onUpdateTodo }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const editTodo = (newValue) => {
    onUpdateTodo(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };

  const renderTodos = () => {
    if (todos.length === 0)
      return <div className="message">Nothing to do, Enjoy your Day!</div>;
    return (
      <Card className="bg-light">
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onComplete={() => onComplete(todo.id)}
              onDelete={() => onDelete(todo.id)}
              onEdit={() => setEdit(todo)}
            />
          );
        })}
      </Card>
    );
  };

  return (
    <div>
      {edit.id ? <ToDoForm submitTodo={editTodo} edit={edit} /> : renderTodos()}
    </div>
  );
};

export default ToDoList;
