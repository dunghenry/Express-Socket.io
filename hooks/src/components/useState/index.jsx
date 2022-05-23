import React from 'react';
const orderss = [100, 200, 300]
const Main = () => {
    // const total = orderss.reduce((acc, curr) => acc + curr);
    // console.log(total)

    const [count, setCount] = React.useState(0);
    const [money, setMoney] = React.useState(() => {
        const total = orderss.reduce((acc, curr) => acc + curr);
        console.log(total);
        return total;
    })
    const [info, setInfo] = React.useState({
        fullName: "Tran Van Dung",
        age: 21
    })
    const handleClick = () => {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    }
    const handleInfo = () => {
        // setInfo({...info, bio: "Good boy"})
        // setInfo(prev => {
        //     return{...prev, bio: "Good boy"}
        // })
        setInfo(prev =>({ ...prev, bio: "Good boy" }))
    }
  return (
      <div>
          <h1>Learn useState</h1>
          <h2>{count}</h2>
          <h3>{ money }</h3>
          <button onClick={handleClick}>Count++</button>
          <h4>{JSON.stringify(info)}</h4>
          <button onClick={handleInfo}>Update Info</button>
    </div>
  )
}

export default Main;