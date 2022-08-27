import { useEffect, useRef, useState } from "react";

const ToDoForm = (props) => {
    const [input, setInput] = useState(props.edit && props.edit.text)
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    }, [])
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
                <input
                    ref={inputRef}
                    placeholder={props.edit ? "update todo" : "add todo"}
                    type='text'
                    value={input}
                    onChange={changeHandler} />
                <button type="submit">{props.edit ? 'edit' : 'add'}</button>
            </form>
        </>
    );
}

export default ToDoForm;