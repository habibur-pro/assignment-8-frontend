import { useTimer } from "react-timer-hook";
export type TMyTimer = { expiryTimestamp: Date };
const MyTimer = ({ expiryTimestamp }: TMyTimer) => {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div>
      <div className="text-center mt-5 text-xl flex gap-3 text-yellow-500 mb-3">
        Ends in:
        <div>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
      </div>
    </div>
  );
};

export default MyTimer;
