import React from 'react';
import { IncidentsInterface } from './incidents.types';

const IncidentsListItem = ({ incident } : { incident: IncidentsInterface }) => {
  const { id, name, incidentStatusId, duration, participants, severity }= incident;
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
}

export default IncidentsListItem