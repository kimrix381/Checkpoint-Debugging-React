import { useState } from "react";
import Counter from "./counter.jsx";
import Display from "./display.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Vite Debug Sample</h1>
      <Counter count={count} setCount={setCount} />
      {/* <Display count={count} /> */}
      <Display value={count} />
    </div>
  );
}

export default App;
