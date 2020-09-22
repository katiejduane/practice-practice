import React, { useState } from 'react';

function CounterHooks() {
  const [count, setCount] = useState(0);
  // (returns an array)
  // 1. the piece of state
  // 2. function to update that piece of state -> setCount
  return (
    <div>
      <h1>The hooked count is... {count}</h1>
      <button onClick={() => setCount(count + 2)}>Add 1</button>
    </div>
  );
}

export default CounterHooks;
