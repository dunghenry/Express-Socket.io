import React from 'react'
const initialState = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE': {
            console.log(action.payload)
            return state + 1
        }
        case 'DECREASE': {
            console.log(action.payload)
            return state - 1;
        }
        default: {
            return state;
        }
    }
}
const Main = () => {
    const [count, dispatch] = React.useReducer(reducer, initialState)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch({type: 'INCREASE', payload: 'count++'})}>Count++</button>
            <button onClick={() => dispatch({type: 'DECREASE', payload: 'count--'})}>Count--</button>
        </div>
    )
}

export default Main