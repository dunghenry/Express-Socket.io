import React from 'react'
import { useStore } from './../../store/hooks';
const Navbar = () => {
  const [state] = useStore();
  return (
    <div>
      <h1>Courses use useReducer + useContext and Backend</h1>
      <h2>Total : {state.todos.length}</h2>
    </div>
  )
}

export default Navbar