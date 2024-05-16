import { useState } from "react";
import Header from "./components/Header";
import SpeedCard from "./components/SpeedCard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Header />
        <SpeedCard value={80} />
      </div>
    </>
  );
}

export default App;
