"use client";

import MyTimer from "./MyTimer";

const Countdown = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 86400); // 10 minutes timer
  return (
    <div>
      <div>
        <MyTimer expiryTimestamp={time} />
      </div>
    </div>
  );
};

export default Countdown;
