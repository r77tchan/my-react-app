import React, { useState } from 'react';

function Counter() {
  // countはStateの値、setCountはStateを更新するための関数
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('This is a message!');
  const [inputValue, setInputValue] = useState('');

  // イベントハンドラ関数
  const handleClick = () => {
    setMessage('Button clicked!');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e);
    console.log(e.target);
  };

  return (
    <div>
      <div>
        <p>Current count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
      <div>
        <p>Input your name: {name}</p>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <p>{message}</p>
        <button onClick={handleClick}>Click Me</button>
      </div>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <p>Current input: {inputValue}</p>
      </div>
    </div>
  );
}

export default Counter;