
import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  }
  
  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
  }

  return (
    <>
    <h1>Counter!</h1>

    <h3>Counter value : {counter} </h3>

    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
