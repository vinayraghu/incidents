import React from 'react'

interface TimestampInterface {
  createdOn: string; // UTC time
}

const Timestamp = ({ createdOn } : TimestampInterface) => {
  return (
    <p>{localDate}</p>
  )
}

export default Timestamp