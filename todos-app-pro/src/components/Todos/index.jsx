import React from "react";
import { useStore } from "./../../store/hooks";
import { getTodos, deleteTodo, setIdUpdate, markCompleted } from "./../../store/actions";

const Todos = () => {
  const [state, dispatch] = useStore();
  const { todos } = state;
  React.useEffect(() => {
    async function fetchData() {
      dispatch(await getTodos());
    }
    fetchData();
  }, []);
  return (
    <div className="todos">
      {
        todos.length > 0 && todos.map(todo => {
           return (
            <div className="item" key={todo._id}>
              <div className={todo.completed ? ' completed' : ''}>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
              </div>
            <div className="box-btn">
              <button
                onClick={async () => dispatch(await deleteTodo(todo._id))}
              >
                Delete
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={() => dispatch(setIdUpdate(todo._id))}>Update</button>&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="checkbox" checked={todo.completed} onChange={async() => dispatch(await markCompleted(todo._id))}/>
            </div>
          </div>
          );
        })
      }
    </div>
  );
};

export default Todos;
