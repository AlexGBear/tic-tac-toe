import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

//import '../styles/Global.css';

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    console.log('clicked!');
    setValue("X");
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

// Up to section: Completing the game | Link: https://react.dev/learn/tutorial-tic-tac-toe