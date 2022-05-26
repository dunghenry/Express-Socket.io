import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
          detail: `Nội dung comment của lesson-${id}`
        })
      )
  }, 2000);
}
emitComment(1);
emitComment(2);
emitComment(3);
ReactDOM.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);