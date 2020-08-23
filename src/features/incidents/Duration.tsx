import React from "react";

interface DurationInterface {
  duration: number;
}

const Duration = ({ duration }: DurationInterface) => {
  return <p>{duration}</p>;
};

export default Duration;
