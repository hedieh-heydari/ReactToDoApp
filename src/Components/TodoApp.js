import { useEffect, useState } from "react";
import { Card } from "reactstrap";
import Navbar from "./Navbar";
import ToDoForm from "./ToDoForm";
import ToDoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    filterTodos(selectedOption.value);
  }, [todos, selectedOption]);

  useEffect(() => {
    localStorage.setItem(`todos`, JSON.stringify(todos));
  }, [todos]);


  localStorage.setItem('todos', JSON.stringify(todos));



  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  const completeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((t) => t.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  const selectHandler = (e) => {
    setSelectedOption(e);
    filterTodos(e.value);
  };

  const filterTodos = (selectedOption) => {
    switch (selectedOption) {
      case "Completed":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };
  return (
    <>
      <Card className="p-2 mb-3 bg-light">
        <ToDoForm submitTodo={addTodoHandler} />
        <Navbar
          unCompletedTodos={todos.filter((t) => !t.isCompleted).length}
          completedTodos={todos.filter((t) => t.isCompleted).length}
          filterTodos={filterTodos}
          selectedOption={selectedOption}
          onChange={selectHandler}
        />
      </Card>
      <ToDoList
        todos={filteredTodos}
        onComplete={completeTodo}
        onDelete={removeTodo}
        onUpdateTodo={updateTodo}
      />

      <footer>-- Hedieh --</footer>
    </>
  );
};

export default TodoApp;
