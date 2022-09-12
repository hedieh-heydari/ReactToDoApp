import { useState } from "react";

const Navbar = ({ unCompletedTodos, filterTodos }) => {
  const [status, setStatus] = useState("All");
  const changeHandler = (e) => {
    setStatus(e.target.value);
    filterTodos(e.target.value)
  };

  if (!unCompletedTodos) return <h2>set your todos !</h2>;
  return (
    <header>
      <span>{unCompletedTodos}</span>
      <select onChange={changeHandler} value={status}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </header>
  );
};

export default Navbar;
