import { Profiler, useMemo, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  function onRender(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) {
    console.log("Actual Duration " + actualDuration);
  }

  const expensiveComputation = (count) => {
    console.log("Running expensive computation...");
    let sum = 0;
    for (let i = 0; i < 100_000_000; i++) {
      sum += i;
    }
    return sum + count;
  };

  const totalCount = useMemo(expensiveComputation(count), [count]);

  return (
    <Profiler id="app" onRender={onRender}>
      <div className="App">
        <div>
          <h2>Memoized Expensive Computation</h2>
          <p>Count: {count}</p>
          <p>Computed Result: {totalCount}</p>

          <button onClick={() => setCount(count + 1)}>Increment Count</button>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type something..."
          />
        </div>
      </div>
    </Profiler>
  );
}
