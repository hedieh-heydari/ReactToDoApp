import { useState } from "react";

const ToDoForm = () => {
    const [todo, setTodo] = useState('')
    const changeHandler = (e) => {
        setTodo(e.target.value)
        console.log(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <input type='text' value={todo} onChange={changeHandler} />
                <button type="submit">add</button>
            </form>
        </>
    );
}

export default ToDoForm;