import React from 'react';
import './App.css';
import TestMap from './Components/Pages/Map';
import useFetch from './Hooks/useFetch';

function App() {
  const [state] = useFetch();
  const handleClick = () => {
    console.log(state);
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
