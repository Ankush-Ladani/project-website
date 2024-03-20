import "./App.css";
import iot from "./images/iot.png";
import { useState } from "react";
import Slider from "./Slider";

function App() {
  const [isWifiConnected, setIsWifiConnected] = useState(false);
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);

  const [bulb1State, setBulb1State] = useState(false);
  const [bulb2State, setBulb2State] = useState(true);

  const [highSetPoint, setHighSetPoint] = useState(30);
  const [lowSetPoint, setLowSetPoint] = useState(20);

  const handleChangeInHighSetPoint = () => {
    console.log("Value sent to Firebase...");
    console.log(highSetPoint);
  };

  const handleChangeInLowSetPoint = () => {
    console.log("Value sent to Firebase...");
    console.log(lowSetPoint);
  };

  return (
    <div className="App">
      <div className="grid sm:bg-slate-300 p-5 bg-orange-400 sm:grid-cols-12 grid-cols-12">
        <div className="sm:col-span-1 col-span-4">
          <img src={iot} alt="iot-logo" className="sm:h-20 h-20" />
        </div>
        <div className="sm:col-span-9 col-span-6 text-2xl pr-5 sm:pr-0 sm:text-3xl flex sm:justify-start justify-center items-center sm:mr-0 font-bold sm:flex sm:items-center">
          Smart Control Room
        </div>
        <div
          className={`flex items-center col-span-2
          `}>
          <div
            className={`sm:rounded-full rounded-full min-h-16 min-w-16 sm:min-h-20 sm:min-w-20 ${
              isWifiConnected ? "bg-green-800" : "bg-red-600"
            }
          `}></div>
        </div>
      </div>

      {/* <div
        className={`grid grid-cols-12 sm:hidden
          `}>
        <div
          className={`sm:hidden rounded-full col-start-6 min-h-12 min-w-12 ${
            isWifiConnected ? "bg-green-800" : "bg-red-600"
          }
          `}></div>
      </div> */}

      <div className="grid sm:grid-cols-12 text-center mt-3 mb-3 sm:mt-5 sm:mb-5">
        <h1 className="col-span-12 sm:text-5xl text-3xl font-bold">
          Welcome to IOT Project
        </h1>
      </div>

      {/* LED SECTION - 1 */}

      <div className="grid  sm:grid-cols-12 grid-cols-12">
        <div className=" sm:col-span-5 col-span-6 sm:p-5 col-start-3 sm:col-start-4">
          <div
            className={`sm:rounded-full flex items-center font-bold text-white justify-center rounded-full h-24 w-24 sm:h-24 sm:w-24
            bg-purple-600
          `}>
            BULB - 1
          </div>
        </div>

        <div className="sm:col-span-2 sm:p-5">
          <div
            className={`sm:rounded-full flex items-center justify-center font-bold text-white text-2xl sm:text-3xl rounded-full h-24 w-24 sm:h-24 sm:w-24 ${
              bulb1State ? "bg-green-800" : "bg-red-600"
            }
          `}>
            {bulb1State ? "ON" : "OFF"}
          </div>
        </div>
      </div>

      {/* LED SECTION - 2 */}
      <div className="grid  sm:grid-cols-12 grid-cols-12 mt-5">
        <div className=" sm:col-span-5 col-span-6 sm:p-5 col-start-3 sm:col-start-4">
          <div
            className={`sm:rounded-full flex items-center font-bold text-white justify-center rounded-full h-24 w-24 sm:h-24 sm:w-24
            bg-purple-600
          `}>
            BULB - 2
          </div>
        </div>

        <div className="sm:col-span-2 sm:p-5">
          <div
            className={`sm:rounded-full flex items-center justify-center font-bold text-white text-2xl sm:text-3xl rounded-full h-24 w-24 sm:h-24 sm:w-24 ${
              bulb2State ? "bg-green-800" : "bg-red-600"
            }
          `}>
            {bulb2State ? "ON" : "OFF"}
          </div>
        </div>
      </div>

      {/* INPUT SECTION */}
      <div className="grid sm:grid-cols-12 mt-4 grid-cols-12 sm:mt-0">
        <div className=" sm:col-start-3 sm:col-span-3 col-span-12">
          <div className="text-center">
            <h1 className="font-bold text-xl sm:text-3xl">
              High Setpoint - {highSetPoint == "" ? 0 : highSetPoint}
            </h1>
            <div className="">
              <input
                className="mt-3 p-3 bg-gray-400 rounded-lg mr-3"
                onChange={(e) => setHighSetPoint(e.target.value)}
                type="number"
                value={highSetPoint}
              />
              <button
                onClick={handleChangeInHighSetPoint}
                type="submit"
                className="bg-green-400 p-3 w-32 rounded-lg hover:bg-green-500">
                Set
              </button>
            </div>
          </div>
        </div>
        <div className="sm:h-auto mt-4 sm:col-span-2 sm:mt-0 col-span-12">
          <Slider />
        </div>
        <div className="sm:col-span-3 col-span-12 sm:mt-0">
          <div className="text-center">
            <h1 className="font-bold text-xl sm:text-3xl">
              Low Setpoint - {lowSetPoint == "" ? 0 : lowSetPoint}
            </h1>
            <div className="">
              <input
                className="mt-3 p-3 bg-gray-400 rounded-lg mr-3"
                onChange={(e) => setLowSetPoint(e.target.value)}
                type="number"
                value={lowSetPoint}
              />
              <button
                onClick={handleChangeInLowSetPoint}
                type="submit"
                className="bg-green-400 p-3 w-32 rounded-lg hover:bg-green-500">
                Set
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex mt-10 justify-center">
        <Slider />
      </div> */}
    </div>
  );
}

export default App;
