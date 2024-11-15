import React, { useState, useEffect, Profiler } from 'react';

// Webpack or Create React App (CRA) setup for web workers:
// Webpack and CRA require the URL loader for workers
// Webpack and CRA require the URL loader for workers

export default function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const [totalCount, setTotalCount] = useState(null);

  function onRender(id, phase, actualDuration) {
    console.log('Actual Duration ' + actualDuration);
  }

  useEffect(() => {
    const ExpensiveWorker = new Worker(new URL('./expensiveWorker.js', import.meta.url), { type: 'module' });

    // Post the `count` to the worker
    ExpensiveWorker.postMessage(count);

    // Listen for messages from the worker
    ExpensiveWorker.onmessage = e => {
      setTotalCount(e.data);
    };

    // Clean up when the component unmounts
    return () => {
      ExpensiveWorker.terminate();
    };
  }, [count]);

  return (
    <Profiler id="app" onRender={onRender}>
      <div className="App">
        <div>
          <h2>Web Worker Expensive Computation</h2>
          <p>Count: {count}</p>
          <p>
            Computed Result: {totalCount !== null ? totalCount : 'Computing...'}
          </p>

          <button onClick={() => setCount(count + 1)}>Increment Count</button>

          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type something..."
          />
        </div>
      </div>
    </Profiler>
  );
}
