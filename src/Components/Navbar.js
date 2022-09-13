import Select from "react-select";
import { Badge } from "reactstrap";

const Navbar = ({ unCompletedTodos, onChange, selectedOption }) => {
  const options = [
    { value: "All", label: "All" },
    { value: "Completed", label: "Completed" },
    { value: "Uncompleted", label: "Uncompleted" },
  ];
  return (
    <header className="d-flex justify-content-between w-100">
      <Select onChange={onChange} value={selectedOption} options={options} />
      <Badge
        color="danger"
        className="m-1 d-flex align-items-center justify-content-center"
      >
        {unCompletedTodos}
      </Badge>
    </header>
  );
};

export default Navbar;
