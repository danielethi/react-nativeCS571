import React, { useEffect, useState } from "react";

export default function ClockFunction() {
  const [time, setTime] = useState(new Date());

  const tick = () => {
    setTime(new Date());
  };
  useEffect(() => {
   let interval= setInterval(tick, 2000);
    return()=>clearInterval(interval)
  }, []);

  return (
    <div>
        <h1>Time:{time.toLocaleString}</h1>
    
    </div>
  );
}
