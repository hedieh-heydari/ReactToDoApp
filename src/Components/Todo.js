import { Button } from "reactstrap";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  var data = JSON.parse(localStorage.getItem("todos"));
  console.log(data, 'local');

  return (
    <div className="todo">
      <div
        onClick={onComplete}
        className={`${todo.isCompleted ? "completed" : ""} todoText`}
      >
        {data.text}
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
