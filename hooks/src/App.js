import './App.css';
import  React from 'react'
import Example from './components/useState/Example';
// import Main from './components/useState/index';
import Example2 from './components/useState/Example2';
import Example3 from './components/useState/Exampe3';
import Todos from './components/todosApp';
import Main from './components/mountedAndUnmounted';
import PartOne from './components/useEffect/PartOne';
import PartTwo from './components/useEffect/PartTwo';
import PartThree from './components/useEffect/PartThree';
import PartFour from './components/useEffect/PartFour';
import PartFive from './components/useEffect/PartFive';
import Chat from './components/fakeChat';
import UseLayoutEffect from './components/useLayoutEffect';
import UseRef from './components/useRef';
import Memo from './components/memo';
import UseCallback from './components/useCallback';
import UseMemo from './components/useMemo'
function App() {
  const [show, setShow] = React.useState(false);
  //es5
  // const handleClick = (id) => {
  //   return function () {
  //     console.log(id)
  //   }
  // }

  //es6
  // const handleClick = (id) => handleClick => {
  //   console.log(id)
  // }

  //bind tạo ra hàm mới để sau này cần dùng và tham chiếu đến hàm handleClick.bind(null, Math.random())
  const handleClick = (id) => {
    console.log(id)
  }
  // const handleClick = () => {
  //   console.log("hi")
  // }
  return (
    <div className="App">
      {/* <button onClick={handleClick(Math.random())}>Click me!</button> */}
      {/* <button onClick={handleClick.bind(this, Math.random())}>Click me!</button> */}
      {/* <button onClick={ handleClick}>Click me!</button> */}
      {/* <Main /> */}
      {/* <Example /> */}
      {/* <Example2 /> */}
      {/* <Example3/> */}
      {/* <Todos/> */}
      {/* {
        show && <Main /> 
      }
      <button onClick={() => setShow(!show)}>Set Show</button> */}
      {/* <PartOne /> */}
      {/* {
        show && <PartTwo /> 
      }
      <button onClick={() => setShow(!show)}>Set Show</button> */}
      {/* {
        show && <PartThree /> 
      } */}
      {
        // show && <PartFour /> 
      }
      {/* {
        show && <PartFive /> 
      } */}
      {/* <button onClick={() => setShow(!show)}>Set Show</button> */}
      {/* <Chat /> */}
      {/* <UseLayoutEffect/> */}
      {/* <UseRef/> */}
      {/* <Memo /> */}
      <UseCallback />
      {/* <UseMemo/> */}
    </div>

  );
}

export default App;
