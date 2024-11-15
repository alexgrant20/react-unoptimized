import "./styles.css";

import React, { useState, useCallback } from "react";

const ChildComponent = React.memo(({ onClickHandler }) => {
  console.log("ChildComponent rendered");
  return <button onClick={onClickHandler}>Click Me</button>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleButtonClick = useCallback(() => {
    console.log("Button clicked, current count:", count);
    setCount((prev) => prev + 1);
  }, [count]);

  return (
    <div>
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />

      <ChildComponent onClickHandler={handleButtonClick} />
    </div>
  );
}
