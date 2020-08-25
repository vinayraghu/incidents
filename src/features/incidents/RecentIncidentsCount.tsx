import React from 'react'
import { StyledCount, StyledCountText, Card } from './incident.styles';
interface RecentIncidentsCountInterface {
  count: number;
}

const RecentIncidentCount = ({ count }: RecentIncidentsCountInterface) => {
  return (
    <Card>
      <StyledCount>{ count }</StyledCount>
      <StyledCountText>Recent incidents</StyledCountText>
    </Card>
  )
}

export default RecentIncidentCount