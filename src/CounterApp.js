import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const increase = () => {
    const newCount = count + 1
    setCount(newCount);
    setHistory([...history, newCount]);
  }
  const decrease = () => {
    const newCount = count - 1;
    setCount(newCount);
    setHistory([...history, newCount]);
  }
  const reset = () => {
    setCount(0);
    setHistory([]);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>

      <h2>History</h2>
      <ul>
        {history.map((value, index) => (
          <li key={index}>Count: {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default CounterApp;
