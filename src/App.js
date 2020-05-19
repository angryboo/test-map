import React from 'react';
import './App.css';
import TestMap from './Components/Pages/Map';
import { mask } from './API/MainAPI';

function App() {
  const handleClick = async () => {
    const { data } = await mask.getMask();
    console.log(data);
  };
  return (
    <div className="App">
      <button type="button" onClick={handleClick}>
        확인
      </button>
      <TestMap />
    </div>
  );
}

export default App;
