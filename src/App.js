import React, { Profiler } from "react";

const LargeList = ({ items }) => {
  console.log("LargeList rendered");
  return (
    <ul>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <li>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default function App() {
  function onRender(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) {
    console.log(
      `Render duration for ${id} (${phase} phase): ${actualDuration} ms`
    );
  }

  const data = Array.from({ length: 10000 }, (_, i) => ({
    title: `Item ${i + 1}`,
    description: `Description for item ${i + 1}`,
  }));

  return (
    <React.Fragment>
      <Profiler id="app" onRender={onRender}>
        <h1>Rendering Large List with React Fragments</h1>
        <LargeList items={data} />
      </Profiler>
    </React.Fragment>
  );
}
