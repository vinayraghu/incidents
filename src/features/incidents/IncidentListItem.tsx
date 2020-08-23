import React from 'react';
import { IncidentInterface } from './incidents.types';
import { getSeverityName } from './incidents.helpers';
import Commander from './Commander'

const IncidentsListItem = ({ incident } : { incident: IncidentInterface }) => {
  const { id, name, incidentStatusId, duration, participants, severity }= incident;
  const severityName = getSeverityName(severity);

  return (
    <div>
      <h4>{name}</h4>
      {
        severityName && (
          <p>{severityName}</p>
        )
      }
      <Commander participants={participants} />
    </div>
  );
}

export default IncidentsListItem