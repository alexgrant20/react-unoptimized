// expensiveWorker.js

// Listen for messages from the main thread
onmessage = function (e) {
  const count = e.data;

  // Perform the expensive computation
  let sum = 0;
  for (let i = 0; i < 100_000_000_000; i++) {
    sum += i;
  }

  // Send the result back to the main thread
  postMessage(sum + count);
};
