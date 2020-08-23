import React from 'react';
import { IncidentInterface } from './incidents.types';
import { getSeverityName } from './incidents.helpers';
import Commander from './Commander'
import ChannelName from './ChannelName'
import Timestamp from './Timestamp'
import Duration from './Duration'
import IncidentStatusBadge from './IncidentStatusBadge'

const IncidentsListItem = ({ incident } : { incident: IncidentInterface }) => {
  const { id, name, incidentStatusId, duration, participants, severity, createdOn } = incident;
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
      <ChannelName incident={incident} />
      <Timestamp createdOn ={createdOn} />
      <Duration duration={duration} />
      <IncidentStatusBadge incidentStatusId={incidentStatusId} />
    </div>
  );
}

export default IncidentsListItem