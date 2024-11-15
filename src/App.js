import React from "react";

function App() {
  console.log("Main App rendered");

  return (
    <>
      <Counter />
      <footer>
        <p>Copyright 2024 Panthera Inc.</p>
      </footer>
    </>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);

  console.log("Counter rendered");
  return (
    <main>
      <BigCountNumber count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </main>
  );
}

function BigCountNumber({ count }) {
  console.log("BIG number rendered");
  return (
    <p>
      <span className="prefix">Count:</span>
      {count}
    </p>
  );
}

export default App;
