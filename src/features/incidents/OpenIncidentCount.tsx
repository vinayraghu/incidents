import React from 'react'

interface OpenIncidentsCountInterface {
  count: number;
}

const OpenIncidentCount = ({ count }: OpenIncidentsCountInterface) => {
  return (
    <>
      <h3>Total open incidents</h3>
      { count }
    </>
  )
}

export default OpenIncidentCount