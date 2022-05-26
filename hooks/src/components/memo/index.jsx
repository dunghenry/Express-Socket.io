import React from 'react'
import Content from './Content'

const Main = () => {
    const [count, setCount] = React.useState(0)
    const handleClick = () => {
        setCount(prev => prev + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Count++</button>
            <Content />
        </div>
    )
}

export default Main