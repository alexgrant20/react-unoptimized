import React, { Profiler, useState } from "react";
import { FixedSizeList as List } from "react-window";

function App() {
  // Initial data for the dropdown
  const [items, setItems] = useState(
    Array.from({ length: 100000 }, (_, index) => `Option ${index + 1}`)
  );

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

  return (
    <Profiler id="app" onRender={onRender}>
      <div style={{ width: 300, margin: "20px auto" }}>
        <label htmlFor="dropdown" style={{ display: "block", marginBottom: 5 }}>
          Select an Option
        </label>
        <List height={200} itemCount={items.length} itemSize={35} width="100%">
          {({ index, style }) => (
            <div key={index} style={style}>
              {items[index]}
            </div>
          )}
        </List>
      </div>
    </Profiler>
    // <Profiler id="app" onRender={onRender}>
    //   <div
    //     style={{
    //       width: 300,
    //       margin: "20px auto",
    //       height: 400,
    //       overflowY: "auto",
    //       border: "1px solid #ccc",
    //     }}
    //   >
    //     <label htmlFor="dropdown" style={{ display: "block", marginBottom: 5 }}>
    //       Select an Option
    //     </label>
    //     <div>
    //       {items.map((item, index) => (
    //         <div
    //           key={index}
    //           style={{ padding: 10, borderBottom: "1px solid #ddd" }}
    //         >
    //           {item}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </Profiler>
  );
}

export default App;
