// LazyLoadExample.js
import React, { Suspense } from "react";

// Dynamically import the component
const HeavyComponent = React.lazy(() => import("./HeavyComponent"));

function App() {
  return (
    <div>
      <h1>Lazy Loading Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* HeavyComponent is only loaded when rendered */}
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
