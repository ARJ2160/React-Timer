import React, { useState } from "react";

function App() {
  setInterval(timer, 1000);

  const now = new Date().toLocaleTimeString();
  const [time, updateTime] = useState(now);

  function timer() {
    const clickedTime = new Date().toLocaleTimeString();
    updateTime(clickedTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={timer}>Get Time</button>
    </div>
  );
}

export default App;
