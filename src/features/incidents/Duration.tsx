import React from "react";
import { getDaysHoursMinutesSeconds } from "./incidents.helpers";

interface DurationInterface {
  duration: number;
}

const Duration = ({ duration }: DurationInterface) => {
  const { days, hours, minutes, seconds } = getDaysHoursMinutesSeconds(
    duration
  );

  const daysDisplay = days > 0 ? `${days} day${days > 1 && "s"} ` : null;
  const hoursDisplay = hours > 0 ? `${hours} hour${hours > 1 && "s"} ` : null;
  const minutesDisplay =
    minutes > 0 ? `${minutes} minute${minutes > 1 && "s"} ` : null;
  const secondsDisplay =
    seconds > 0 ? `${seconds} second${seconds > 1 && "s"} ` : null;

  return (
    <div>
      {daysDisplay}
      {hoursDisplay}
      {minutesDisplay}
      {secondsDisplay}
    </div>
  );
};

export default Duration;
