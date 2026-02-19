import "./App.css";
import data from "/data.json";
import Card from "./components/Card";
import ProfileCard from "./components/ProfileCard";
import { useState } from "react";

function App() {
  const [timeframe, setTimeframe] = useState("daily");

  return (
    <div className="bg-bg h-screen overflow-hidden flex items-center justify-center font-rubik text-white font-thin hover:cursor-pointer">
      <div className="grid grid-cols-4 grid-rows-2 gap-4 h-2/5 w-2/3">
        <div className="row-span-2 ">
          <ProfileCard timeframe={timeframe} setTimeframe={setTimeframe}/>
        </div>
         {data.map((d, i) => (
            <Card key={i} d={d} timeframe={timeframe} />
          ))}

      </div>
    </div>
  );
}

export default App;
