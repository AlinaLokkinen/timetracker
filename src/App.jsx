import "./App.css";
import data from "/data.json";
import Card from "./components/Card";
import ProfileCard from "./components/ProfileCard";
import { useState } from "react";

function App() {
  const [timeframe, setTimeframe] = useState("daily");

  return (
    <div className="bg-bg h-screen overflow-hidden flex lg:items-center justify-center font-rubik text-white font-thin hover:cursor-pointer">
      <div className="grid grid-cols-1 grid-rows-7 my-10 lg:grid-cols-4 lg:grid-rows-2 lg:gap-4 gap-2 lg:h-2/5 w-2/3">
        <div className="lg:row-span-2">
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
