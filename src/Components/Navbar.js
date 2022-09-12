import Select from "react-select";

const Navbar = ({ unCompletedTodos, onChange, selectedOption }) => {
  const options = [
    { value: "All", label: "All" },
    { value: "Completed", label: "Completed" },
    { value: "Uncompleted", label: "Uncompleted" },
  ];
  if (!unCompletedTodos) return <h2>set your todos !</h2>;
  return (
    <header>
      <span>{unCompletedTodos}</span>

      <Select onChange={onChange} value={selectedOption} options={options} />
      {/* <select onChange={onChange} value={selectedOption}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select> */}
    </header>
  );
};

export default Navbar;
