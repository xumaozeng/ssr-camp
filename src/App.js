import React, { useState } from "react";

function App(props) {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h3>
        哈喽{props.title}!{count}
      </h3>
      <button onClick={() => setCount(count + 1)}>累加</button>
    </div>
  );
}
export default App;
