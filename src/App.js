import useTimer from "./useTimer1";
import { formatTime } from "./formatTime";
import "./App.css";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer();
  // const refbtn = useRef();
  // refbtn.active = true;
  //10s --- 00h 00m 10s
  console.log(formatTime(time));
  return (
    <div className="A pp container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
