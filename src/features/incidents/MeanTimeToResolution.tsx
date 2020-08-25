import React from 'react'
import Duration from './Duration'
import { StyledCountText, Card } from './incident.styles';

interface MeanTimeToResolutionInterface {
  time: number;
}

const MeanTimeToResolution = ({ time }: MeanTimeToResolutionInterface) => {
  return (
    <Card>
      <StyledCountText>
        <Duration duration={time} />
        <br />
        Mean time to resolution
      </StyledCountText>
    </Card>
  )
}

export default MeanTimeToResolution