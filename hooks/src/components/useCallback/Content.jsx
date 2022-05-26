import React from 'react'

const Content = ({onIncrement}) => {
    console.log('Render')
  return (
      <div>
          <button onClick={onIncrement}>Count++</button>
    </div>
  )
}

export default React.memo(Content)