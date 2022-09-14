import { Button } from "reactstrap";
import { useEffect, useState } from "react";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  // var data = JSON.parse(localStorage.getItem(`todos`));
  // console.log(data[0].text, "local");

  // const [todos, setTodos] = useState([]);
  // const data = "";
  // useEffect(() => {
  //   data = JSON.parse(localStorage.getItem("todos"));
  // }, []);

  return (
    <div className="todo">
      <div
        onClick={onComplete}
        className={`${todo.isCompleted ? "completed" : ""} todoText`}
      >
        {todo.text}
      </div>
      <div>
        <Button onClick={onEdit} className="me-1" color="warning" outline>
          edit
        </Button>
        <Button onClick={onDelete} color="danger" outline>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Todo;
