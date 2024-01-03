import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleCount = (val) => {
    setCount(count + val);
  };
  return (
    <>
      <button onClick={() => handleCount(+1)}>+1</button>
      <button>{count}</button>
      <button onClick={() => handleCount(-1)}>-1</button>
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default App;
