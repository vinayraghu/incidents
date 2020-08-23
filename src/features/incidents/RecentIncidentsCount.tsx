import React from 'react'

interface RecentIncidentsCountInterface {
  count: number;
}

const RecentIncidentCount = ({ count }: RecentIncidentsCountInterface) => {
  return (
    <>
      <h3>Recent incidents (created in the past 30 days)</h3>
      { count }
    </>
  )
}

export default RecentIncidentCount