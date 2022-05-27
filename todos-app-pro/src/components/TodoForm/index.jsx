import React from 'react'
import { setDes, setTitle, addTodo } from '../../store/actions';
import { useStore } from './../../store/hooks';
import { updateTodo, setIdUpdate} from './../../store/actions';
const TodoForm = () => {
  const [state, dispatch] = useStore();
  const { title, des, isUpdate, idUpdate} = state;
  const inputRef = React.useRef();
  const handleSubmit = async () => {
    const todo = {
      title,
      description: des
    }
    dispatch(await addTodo(todo))
    dispatch(setTitle(''))
    dispatch(setDes(''))
    inputRef.current.focus();
  }
  const handleUpdate = async () => {
    const todoUpdate = {
      title,
      description: des
    }
    dispatch(await updateTodo(idUpdate, todoUpdate));
    dispatch(setTitle(''))
    dispatch(setDes(''))
    inputRef.current.focus();
    dispatch(setIdUpdate(undefined))
  }
  return (
    <div>
      <div>
        <label>Title : </label>
        <input ref={inputRef} value={title} type="text" onChange={(e) => dispatch(setTitle(e.target.value))} />
      </div>
      <div>
        <label>Des : </label>
        <input value={des} type="text" onChange={(e) => dispatch(setDes(e.target.value))} />
      </div>
      <div>
        {
          isUpdate ? <button onClick={handleUpdate}>Update</button> : <button onClick={handleSubmit}>Add todo</button>
        }
      </div>
    </div>
  )
}

export default TodoForm