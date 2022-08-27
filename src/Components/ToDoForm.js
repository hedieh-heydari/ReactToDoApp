import { useEffect, useRef, useState } from "react";

const ToDoForm = (props) => {
    const [input, setInput] = useState("")
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
                {props.edit ?
                    <>
                        <input
                            ref={inputRef}
                            placeholder="update todo ... "
                            type='text' value={input} onChange={changeHandler} />
                        <button type="submit">update</button>
                    </>
                    :
                    <>
                        <input
                            ref={inputRef}
                            placeholder="add todo ..."
                            type='text' value={input} onChange={changeHandler} />
                        <button type="submit">add</button>
                    </>}

            </form>
        </>
    );
}

export default ToDoForm;