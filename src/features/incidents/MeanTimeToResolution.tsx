import React from 'react'
import Duration from './Duration'

interface MeanTimeToResolutionInterface {
  time: number;
}

const MeanTimeToResolution = ({ time }: MeanTimeToResolutionInterface) => {
  return (
    <>
      <h3>Mean time to resolution</h3>
      <Duration duration={time} />
    </>
  )
}

export default MeanTimeToResolution