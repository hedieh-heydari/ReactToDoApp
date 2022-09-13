import { useEffect, useRef, useState } from "react";
import { Button } from "reactstrap";

const ToDoForm = (props) => {
  const [input, setInput] = useState(props.edit && props.edit.text);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("enter todo!");
      return;
    }
    props.submitTodo(input);
    setInput("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="formControl">
          <input
            ref={inputRef}
            placeholder={props.edit ? "update todo" : "add todo"}
            type="text"
            value={input}
            onChange={changeHandler}
          />
          <Button
            outline
            color="primary"
            // className={`btn ${props.edit ? "updateTodo" : "addTodo"}`}
            type="submit"
          >
            {props.edit ? "edit" : "add"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default ToDoForm;
