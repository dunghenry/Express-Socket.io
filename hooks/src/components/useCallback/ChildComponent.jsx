import React from 'react'

const ChildComponent = ({ getData }) => {
    const [posts, setPosts] = React.useState([])
    React.useEffect(() => {
        getData('posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [getData])
    return (
      
        <div>
            <h1>ChildComponent</h1>
            <p>{JSON.stringify(posts)}</p>
    </div>
  )
}

export default React.memo(ChildComponent)