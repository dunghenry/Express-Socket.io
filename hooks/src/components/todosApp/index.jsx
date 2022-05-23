import React from 'react'
import TodoForm from './TodoForm'
import TodosList from './TodosList'

const Main = () => {
  const [todos, setTodos] = React.useState(() => {
    const data = localStorage.getItem('todos');
    const todos = JSON.parse(data)
    return todos ?? [];
  })
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [id, setId] = React.useState();
  const [title, setTitle] = React.useState('')
  return (
      <div>
      <TodoForm setTitle={setTitle} title={title} todos={todos} setTodos={setTodos} isUpdate={isUpdate} setIsUpdate={setIsUpdate} setId={setId} id={id}/>
      <TodosList setTitle={setTitle} todos={todos} setTodos={setTodos} setIsUpdate={setIsUpdate} setId={setId} />
    </div>
  )
}

export default Main