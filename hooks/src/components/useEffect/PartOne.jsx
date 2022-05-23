import React, { useEffect } from 'react';
import axios from 'axios';
const PartOne = () => {
    const [title, setTitle] = React.useState('');
    //useEffect(callback)
    //Callback được gọi ngay sau khi component được mounted
    //Callback được gọi lại mỗi khi component bị re-render
    //Callback được gọi sau khi component thêm element vào DOM
    useEffect(() => {
        document.title = title;
        console.log("Re-render")
    })


    //useEffect(callback, [])
    const [todos, setTodos] = React.useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setTodos(data))
    }, [])
    // useEffect(async() => {
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    //     setTodos(response.data);
    // }, [])

    //Callback được gọi ngay sau khi component được mounted
    //Chỉ gọi callback 1 lần sau khi component được mounted
    return (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            {console.log("Render")}
            {
                todos.map((todo) =><li key={todo.id}>{todo.title}</li>)
            }
        </div>
    )
}

export default PartOne;