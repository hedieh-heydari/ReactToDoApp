const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
    return (
        <div className="todo">
            <div onClick={onComplete} className={todo.isCompleted && "completed"}>{todo.text}</div>
            <div>
                <button onClick={onEdit}>edit</button>
                <button onClick={onDelete} >Delete</button>
            </div>
        </div>
    );
}

export default Todo;