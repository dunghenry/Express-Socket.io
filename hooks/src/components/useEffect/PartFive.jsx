import React from 'react'

const PartFive = () => {
    // const [count, setCount] = React.useState(0);
    // React.useEffect(() => {
    //     console.log(count)
    //     return () => {
    //         console.log("Cleanup function : " + count)
    //     }
    // }, [count])
    const [avatar, setAvatar] = React.useState();
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
        e.target.value = null
    }
    React.useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar])
  return (
      <div>
          {/* <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>Count++</button> */}
          {avatar && <img src={avatar.preview} alt={avatar}/>}
          <input type="file" onChange={ handlePreviewAvatar} />
    </div>
  )
}

export default PartFive