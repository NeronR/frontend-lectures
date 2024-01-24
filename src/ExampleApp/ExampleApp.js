import { useState } from "react";
import Counter from "./components/Counter/Counter";

function ExampleApp() {
  const [counter, setCounter] = useState(0);
  return (
    <Counter value={counter} onChange={setCounter} />
  );
}

export default ExampleApp;
