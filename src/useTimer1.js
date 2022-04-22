import { useState, useRef } from "react";
/* eslint-disable no-unused-vars */

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);
  const isStart = useRef(0);
  const active = useRef();
  const refInterval = useRef("");

  const startTimer = () => {
    const id = setInterval(() => {
      isStart.current += 1;
      console.log(isStart.current);
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    refInterval.current = id;
    active.current.disabled = true;
  };

  const stopTimer = () => {
    setTime(isStart.current);
    clearInterval(refInterval.current);
    active.current.disabled = false;
    console.log(isStart.current);
  };
  const resetTimer = () => {
    setTime(0);
    isStart.current = 0;
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
