import { useEffect, useState } from "react";
import Header from "./components/Header";
import SpeedCard from "./components/SpeedCard";
import database from "./utils/firebase";
import { onValue, ref } from "firebase/database";

function App() {
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    const speedRef = ref(database, "sensor");
    onValue(speedRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setSpeed(data);
    });
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Header />
        <SpeedCard value={speed} />
      </div>
    </>
  );
}

export default App;
