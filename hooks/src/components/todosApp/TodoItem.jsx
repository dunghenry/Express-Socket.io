import React from 'react'
const TodoItem = ({todos, todo, handleDelete, setIsUpdate, setId, setTitle}) => {
  const handleUpdate = (id) => {
    setIsUpdate(true)
    setId(id);
    const todo = todos.find(todo => todo.id === id);
    setTitle(todo.title);
  }
  return (
    <div className="box">
      <h1>{todo.title}</h1> &nbsp;&nbsp;
      <button onClick ={() => handleDelete(todo.id)}>delete</button>&nbsp;&nbsp;
      <button onClick ={() => handleUpdate(todo.id)}>update</button>
    </div>
  )
}

export default React.memo(TodoItem)