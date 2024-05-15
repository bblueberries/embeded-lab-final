import { useState } from "react";
import Header from "./components/Header";
import SpeedCard from "./components/SpeedCard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header/>
        <SpeedCard/>
      </div>
    </>
  );
}

export default App;
