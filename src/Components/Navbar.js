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
    </header>
  );
};

export default Navbar;
