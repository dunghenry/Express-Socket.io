import React from 'react';
import './App.css';
import Header from './components/Header';
import { ThemeContext } from './components/ThemeContext';
import Video from './components/Video';

function App() {
  const { toggleTheme } = React.useContext(ThemeContext);
  const videoRef = React.useRef();
  const handlePlay = () => {
    videoRef.current.player()
  }
  const handlePause = () => {
    videoRef.current.pauser();
  }
  return (
    <div className="App">
      {/* <Header />
      <button onClick={toggleTheme}>Toggle theme</button> */}

      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
