import React, { useEffect, useState } from "react";
import { Timer } from "./Timer";

const CountDown = ({ timeStamp }) => {
  // TIEMPO INICIAL
  const initialState = {
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  };
  // PASO EL ESTADO INICIAL
  const [timeLeft, setTimeLeft] = useState(initialState);
  // SE CREA UN INTERVALO QUE SE EJECUTA CADA SEGUNDO
  useEffect(() => {
    const interval = setInterval(() => {
      updateTimeLeft(timeStamp);
    }, 1000);
    // SE LIMPIA EL INTERVALO CUANDO SE TERMINA EL COMPONENTE
    return () => clearInterval(interval);
  }, [timeStamp]);

  // FUNCION QUE ACTUALIZA EL ESTADO
  const updateTimeLeft = (countDownTimer) => {
    setTimeLeft(Timer(countDownTimer));
  };

  return (
    <div className="countdown">
      <div>
        <p>{timeLeft.days}</p>
        <h3>Days</h3>
      </div>
      <div>
        <p>{timeLeft.hours}</p>
        <h3>Hours</h3>
      </div>
      <div>
        <p>{timeLeft.minutes}</p>
        <h3>Minutes</h3>
      </div>
      <div>
        <p>{timeLeft.seconds}</p>
        <h3>Seconds</h3>
      </div>
    </div>
  );
};

export default CountDown;
