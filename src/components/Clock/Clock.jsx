import { useState, useEffect, useRef } from "react";
import css from "./Clock.module.css";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  let intervalId = useRef(null);

  useEffect(() => {
    intervalId = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className={css.clockFace}>{this.state.time}</div>;
};

export default Clock;
