import React from 'react'

const Content = () => {
  console.log('Render')
  return (
    <div>Content</div>
  )
}

export default React.memo(Content)