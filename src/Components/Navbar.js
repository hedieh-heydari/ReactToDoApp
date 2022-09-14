import Select from "react-select";
import { Badge } from "reactstrap";

const Navbar = ({
  unCompletedTodos,
  completedTodos,
  onChange,
  selectedOption,
}) => {
  const options = [
    { value: "All", label: "All" },
    { value: "Completed", label: "Completed" },
    { value: "Uncompleted", label: "Uncompleted" },
  ];
  return (
    <header className="d-flex justify-content-between w-100">
      <Select onChange={onChange} value={selectedOption} options={options} />
      <div className="d-flex">
        <Badge
          color="danger"
          className="m-1 d-flex align-items-center justify-content-center"
        >
          {unCompletedTodos}
        </Badge>
        <Badge
          className="m-1 d-flex align-items-center justify-content-center"
          color="success"
        >
          {completedTodos}
        </Badge>
      </div>
    </header>
  );
};

export default Navbar;
