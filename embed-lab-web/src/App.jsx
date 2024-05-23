import { useEffect, useState } from "react";
import Header from "./components/Header";
import SpeedCard from "./components/SpeedCard";
import database from "./utils/firebase";
import mortorcycle from "./assets/motorcycle.png"
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
        <div className="flex flex-col my-10 items-center">
          <img src={mortorcycle} width="600" height="600" />
        </div>
      </div>
    </>
  );
}

export default App;
