import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import Header from './components/Header'
function App() {
    return (
        <div>
            <h1>Xin chào</h1>
            <Header/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))