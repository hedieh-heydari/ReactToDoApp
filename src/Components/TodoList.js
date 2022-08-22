import Todo from "./Todo";

const ToDoList = ({ todos }) => {

  const renderTodos = () => {
    if (todos.length === 0) return <p>add todo!</p>;
    return (
      todos.map((todo) => {
      return (
        <Todo key={todo.id} todo={todo} />
      );
    }))
  }

  return <div> {renderTodos()}</div>
}

export default ToDoList;