import React from "react";
import reducer, { initialState } from "./reducer";
import logger from "./logger";
import {
    setTodo,
    addTodo,
    removeTodo,
    setIdUpdate,
    updateTodo,
} from "./actions";
const Todos = () => {
    const [state, dispatch] = React.useReducer(logger(reducer), initialState);
    const { todos, title, idUpdate } = state;
    const inputRef = React.useRef();
    const handleSubmit = () => {
        if (title) {
            dispatch(addTodo({ id: Math.floor(Math.random() * 10000), title }));
            dispatch(setTodo(""));
            inputRef.current.focus();
        }
        else {
            alert("Please enter todo!")
        }
    };
    const handleUpdate = () => {
        if (title) {
            dispatch(updateTodo({ title }));
            dispatch(setIdUpdate(undefined));
            dispatch(setTodo(""));
            inputRef.current.focus();
        } else {
            alert("Please enter todo to update!")
        }
    };
    return (
        <div>
            <div>
                <div>
                    <br></br>
                    <label>Title : </label>
                    <input
                        ref={inputRef}
                        value={title}
                        onChange={(e) => dispatch(setTodo(e.target.value))}
                    />
                </div>
                {idUpdate ? (
                    <button onClick={handleUpdate}>Update</button>
                ) : (
                    <button onClick={handleSubmit}>Add todo</button>
                )}
            </div>
            <div className="box-container">
                {todos.map((todo) => {
                    return (
                        <div className="box" key={todo.id}>
                            <p>{todo.title} &nbsp;</p>
                            <button onClick={() => dispatch(removeTodo(todo.id))}>
                                &times;
                            </button>
                            &nbsp;&nbsp;
                            <button onClick={() => dispatch(setIdUpdate(todo.id))}>
                                update
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Todos;
