import React from "react";
import ChildComponent from "./ChildComponent";
import Content from "./Content";

const Main = () => {
  const [count, setCount] = React.useState(0);
  const [todos, setTodos] = React.useState([]);
  const handleIncrement = React.useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const getData = React.useCallback((type) => {
    return fetch(`https://jsonplaceholder.typicode.com/${type}`)
  }, [])
  
  const handleClick = () => {
    getData('todos')
      .then(res => res.json())
      .then(res => setTodos(res))
  }
  console.log(todos)
  return (
    <div>
      <h1>{count}</h1>
      {/* <Content onIncrement={handleIncrement} /> */}
      <button onClick={handleClick}>Click me</button>
      <p>{JSON.stringify(todos)}</p>
      <ChildComponent getData={getData}/>
    </div>
  );
};

export default Main;
