import { useState } from "react";

const ToDoForm = (props) => {
    const [input, setInput] = useState("")
    const changeHandler = (e) => {
        setInput(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (!input) {
            alert('enter todo!');
            return
        }
        props.submitTodo(input)
        setInput("")
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <input type='text' value={input} onChange={changeHandler} />
                <button type="submit">add</button>
            </form>
        </>
    );
}

export default ToDoForm;