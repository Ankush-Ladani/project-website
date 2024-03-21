import "./App.css";
import iot from "./images/iot.png";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import Slider from "./Slider";

const firebaseConfig = {
  apiKey: "AIzaSyBa_l3VGvt-4wqm2WDlzZ8rCOLo84Nv76s",
  authDomain: "esp32-with-firebase-45cc0.firebaseapp.com",
  databaseURL: "https://esp32-with-firebase-45cc0-default-rtdb.firebaseio.com",
  projectId: "esp32-with-firebase-45cc0",
  storageBucket: "esp32-with-firebase-45cc0.appspot.com",
  messagingSenderId: "319135637073",
  appId: "1:319135637073:web:36d46cfb6e1d08b9dd2270",
};

const app = initializeApp(firebaseConfig);

function App() {
  const [isWifiConnected, setIsWifiConnected] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "test/" + "isWifiConnect");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setIsWifiConnected(data);
    });
  }, [isWifiConnected]);

  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);

  const [bulb1State, setBulb1State] = useState(null);
  const [bulb2State, setBulb2State] = useState(null);

  const [highSetPoint, setHighSetPoint] = useState(30);
  const [lowSetPoint, setLowSetPoint] = useState(20);

  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "test/" + "Bulb1State");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setBulb1State(data);
    });
  }, [bulb1State]);

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "test/" + "Bulb2State");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setBulb2State(data);
    });
  }, [bulb2State]);

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "test/" + "temperature");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setTemperature(data);
    });
  }, [temperature]);

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "test/" + "state");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setState(!data);
    });
  }, [state]);

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "test/" + "state2");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setState2(!data);
    });
  }, [state2]);

  // useEffect(() => {
  //   const db = getDatabase();
  //   set(ref(db, "/test/highSetPoint"), Number(highSetPoint));
  // }, [highSetPoint]);

  // useEffect(() => {
  //   const db = getDatabase();
  //   set(ref(db, "/test/lowSetPoint"), Number(lowSetPoint));
  // }, [lowSetPoint]);

  const highSetPointFunc = (e) => {
    setHighSetPoint(e.target.value);
  };

  const lowSetPointFunc = (e) => {
    setLowSetPoint(e.target.value);
  };

  const writeOnFirebase = () => {
    const db = getDatabase();
    set(ref(db, "test/state"), state);
  };

  const writeOnFirebase2 = () => {
    const db = getDatabase();
    set(ref(db, "test/state2"), state2);
  };

  useEffect(() => {});

  const handleChangeInHighSetPoint = () => {
    const db = getDatabase();
    set(ref(db, "/test/highSetPoint"), Number(highSetPoint));
  };

  const handleChangeInLowSetPoint = () => {
    const db = getDatabase();
    set(ref(db, "/test/lowSetPoint"), Number(lowSetPoint));
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

      <div className="grid sm:grid-cols-12 text-center mt-3 mb-3 sm:mt-5 sm:mb-5">
        <h1 className="col-span-12 sm:text-5xl text-3xl font-bold">
          Welcome to IOT Project
        </h1>
      </div>

      {/* LED SECTION - 1 */}

      <div className="grid  sm:grid-cols-12 grid-cols-12">
        <div className=" sm:col-span-5 col-span-6 sm:p-5 col-start-3 sm:col-start-4">
          <div
            onClick={writeOnFirebase}
            className={`sm:rounded-full flex hover:cursor-pointer items-center font-bold text-white justify-center rounded-full h-24 w-24 sm:h-24 sm:w-24
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
            onClick={writeOnFirebase2}
            className={`sm:rounded-full hover:cursor-pointer flex items-center font-bold text-white justify-center rounded-full h-24 w-24 sm:h-24 sm:w-24
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
                onChange={(e) => highSetPointFunc(e)}
                className="mt-3 p-3 bg-gray-400 sm-w-auto w-28 rounded-lg mr-3"
                // onChange={(e) => setHighSetPoint(e.target.value)}
                type="number"
                value={highSetPoint}
              />
              <button
                onClick={handleChangeInHighSetPoint}
                type="submit"
                className="bg-green-400 p-3 sm:w-32 w-16 rounded-lg sm:mt-0 mt-3 hover:bg-green-500">
                Set
              </button>
            </div>
          </div>
        </div>
        <div className="sm:h-auto mt-4 sm:col-span-2 sm:mt-0 col-span-12">
          <Slider temperature={temperature} />
        </div>
        <div className="sm:col-span-3 col-span-12 sm:mt-0">
          <div className="text-center">
            <h1 className="font-bold text-xl sm:text-3xl">
              Low Setpoint - {lowSetPoint == "" ? 0 : lowSetPoint}
            </h1>
            <div className="">
              <input
                onChange={(e) => lowSetPointFunc(e)}
                className="mt-3 p-3 bg-gray-400 rounded-lg mr-3 sm-w-auto w-28"
                // onChange={(e) => setLowSetPoint(e.target.value)}
                type="number"
                value={lowSetPoint}
              />
              <button
                onClick={handleChangeInLowSetPoint}
                type="submit"
                className="sm:w-32 w-16 bg-green-400 p-3 sm:mt-0 mt-3 rounded-lg hover:bg-green-500">
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
