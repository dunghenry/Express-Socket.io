import React from 'react';

const Main = () => {
    const [time, setTime] = React.useState(60);
    const timeRef = React.useRef();
    const prevState = React.useRef(time);
    React.useEffect(() => {
        prevState.current = time;
    }, [time])
    const handleStart = () => {
        timeRef.current = setInterval(() => {
            setTime(prev => prev - 1)
        }, 1000);
    }
    const handleStop = () => {
        clearInterval(timeRef.current);
    }
    const h1Ref = React.useRef();
    React.useEffect(() => {
        console.log(h1Ref.current.getBoundingClientRect());
        inputRef.current.focus();
    }, [])
    console.log("PrevState : " + prevState.current);
    console.log("State : " + time);
    const inputRef = React.useRef();

  return (
      <div>
          <h1 ref={h1Ref}>Hello</h1>
          <h1 >{time}</h1>
          <input ref={inputRef} />
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default Main;