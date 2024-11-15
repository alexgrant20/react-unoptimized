import React, { Profiler } from "react";
import LazyLoad from "react-lazyload";

function LazyImageComponent() {
  const giganticArray = Array.from({ length: 1000 }, (_, index) => 1 + index);

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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {giganticArray.map((index) => (
          <LazyLoad height={720} key={index} placeholder="LOADING...">
            <img
              key={`huhu-${index}`}
              src={`https://loremflickr.com/1280/720?random=${index}`} // Append ?random=index to make images unique
              alt={`Lazy loaded ${index}`}
              width="100%"
              height="auto"
            />
          </LazyLoad>
        ))}
      </div>
    </Profiler>
  );
}

export default LazyImageComponent;
