import React from 'react'
import TodoItem from './TodoItem';

const TodosList = ({ todos, setTodos, setIsUpdate, setId, setTitle}) => {
 
  const handleDelete = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodos(newTodos);
  }
  return (
    <div>
      {
        todos.map(todo => <TodoItem key={todo.id} todos={todos} setTitle={setTitle} setId={setId} setIsUpdate={setIsUpdate} todo={todo} handleDelete={handleDelete} />)
      }
    </div>
  )
}

export default (TodosList);