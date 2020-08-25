import React from 'react'
import { StyledCount, StyledCountText, Card } from './incident.styles';
interface OpenIncidentsCountInterface {
  count: number;
}



const OpenIncidentCount = ({ count }: OpenIncidentsCountInterface) => {
  return (
    <Card>
      <StyledCount>{ count }</StyledCount>
      <StyledCountText>open incidents</StyledCountText>
    </Card>
  )
}

export default OpenIncidentCount