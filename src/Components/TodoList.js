import Todo from "./Todo";

const ToDoList = ({ todos, onComplete, onDelete }) => {

  const renderTodos = () => {
    if (todos.length === 0) return <p>add todo!</p>;

    return todos.map((todo) => {
      return <Todo key={todo.id} todo={todo} 
      onComplete={() => onComplete(todo.id)} 
      onDelete={()=> onDelete(todo.id)}
      />
    })
  }

  return <div> {renderTodos()}</div>
}

export default ToDoList;