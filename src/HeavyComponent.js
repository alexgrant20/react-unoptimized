import React, { useState, useEffect } from "react";

// Simulating a resource-intensive operation with a large amount of data
function HeavyComponent() {
  const [largeDataSet, setLargeDataSet] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to mimic data fetching or a heavy computation
    setTimeout(() => {
      const data = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
      setLargeDataSet(data);
      setLoading(false);
    }, 3000); // Simulate a 3-second loading delay
  }, []);

  return (
    <div style={{ padding: "20px", border: "2px solid black" }}>
      <h2>Heavy Component Loaded!</h2>
      {loading ? (
        <p>Loading large dataset...</p>
      ) : (
        <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>
          {largeDataSet.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HeavyComponent;
