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
        <button onClick={onEdit} className="btn">
          edit
        </button>
        <button onClick={onDelete} className="btn remove">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
