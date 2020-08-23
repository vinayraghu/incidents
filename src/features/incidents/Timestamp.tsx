import React from 'react'
import { getLocalDate } from './incidents.helpers'

interface TimestampInterface {
  createdOn: string; // UTC time
}

const Timestamp = ({ createdOn } : TimestampInterface) => {
  return (
    <p>{getLocalDate(createdOn)}</p>
  )
}

export default Timestamp