import React from 'react';
import { IncidentsInterface } from './incidents.types';

const IncidentsListItem = ({ incident } : { incident: IncidentsInterface }) => {
  return (
    <div>
      {incident.name}
    </div>
  );
}

export default IncidentsListItem