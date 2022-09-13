import { Button } from "reactstrap";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
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
