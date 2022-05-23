import React from 'react'
const TodoForm = ({title, setTitle, todos, setTodos, isUpdate, setIsUpdate, setId, id}) => {
  const inputRef = React.useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: Math.floor(Math.random() * 10000),
      title,
      completed: false,
    }
    if (title) {
      const newTodos = [todo, ...todos]
      localStorage.setItem('todos', JSON.stringify(newTodos))
      setTodos(newTodos);
      setTitle('');
      inputRef.current.focus();
    }
    else {
      alert('Enter title todo');
    }
  }
  const handleUpdate = () => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo;
    })
    setTodos(newTodos);
    setTitle('');
    localStorage.setItem('todos', JSON.stringify(newTodos))
    setId(null);
    setIsUpdate(false)
  }
  return (
    <div>
     <form>
        <div>
          <label>Title : </label>
          <input ref={inputRef} type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div>
          {
            isUpdate ? <button type='button' onClick={handleUpdate}>Update</button> : <button type='button' onClick={handleSubmit}>Submit</button>
          }
        </div>
     </form>
    </div>
  )
}

export default React.memo(TodoForm);