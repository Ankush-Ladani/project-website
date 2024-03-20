import React from "react";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useEffect } from "react";
import Roundy from "roundy";

function Slider({ temperature = 40 }) {
  const [highSetPoint, sethighSetPoint] = React.useState(30);
  const [lowSetPoint, setLowSetPoint] = React.useState(20);

  // useEffect(() => {
  //   const db = getDatabase();
  //   set(ref(db, '/test/highSetPoint'), Number(highSetPoint));
  // }, [highSetPoint]);

  // useEffect(() => {
  //   const db = getDatabase();
  //   set(ref(db, '/test/lowSetPoint'), Number(lowSetPoint));
  // }, [lowSetPoint]);

  const highSetPointFunc = (e) => {
    sethighSetPoint(e.target.value);
  };

  const lowSetPointFunc = (e) => {
    setLowSetPoint(e.target.value);
  };

  // useEffect(() => {
  //   const db = getDatabase();
  //   const starCountRef = ref(db, "/test/highSetPoint");
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot.val();
  //     sethighSetPoint(data != null ? data : 0);
  //   });
  // }, []);

  // useEffect(() => {
  //   const db = getDatabase();
  //   const starCountRef = ref(db, "/test/" + "lowSetPoint");
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot.val();
  //     setLowSetPoint(data != null ? data : 0);
  //   });
  // }, []);

  return (
    <div className="text-center h-36 sm:overflow-y-hidden">
      <h1 className="sm:relative sm:top-20">
        {temperature?.toFixed(2)}
        <sup>.</sup>C
      </h1>
      <Roundy
        value={temperature?.toFixed(2)}
        stepSize={1}
        radius={100}
        color="red"
        arcSize={180}
        // strokeWidth={8}
      />
    </div>
  );
}

export default Slider;
