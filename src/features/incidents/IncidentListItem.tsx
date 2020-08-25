import React from "react";
import { IncidentInterface } from "./incidents.types";
import { getSeverityName } from "./incidents.helpers";
import Commander from "./Commander";
import ChannelName from "./ChannelName";
import Timestamp from "./Timestamp";
import Duration from "./Duration";
import IncidentStatusBadge from "./IncidentStatusBadge";
import {
  Card,
  CardBody,
  CardHeader,
  IncidentTitle,
  Badge
} from "./incident.styles";

const IncidentsListItem = ({ incident }: { incident: IncidentInterface }) => {
  const {
    name,
    incidentStatusId,
    duration,
    participants,
    severity,
    createdOn,
  } = incident;
  const severityName = getSeverityName(severity);

  return (
      <Card>
        <CardHeader>
          <IncidentTitle>{name}</IncidentTitle>
        </CardHeader>
        <CardBody>
          {severityName && (
            <Badge>
              <p>{severityName}</p>
            </Badge>
          )}
          <div>
            <b>{"Slack: "}</b>
            <ChannelName incident={incident} />
          </div>
          <Timestamp createdOn={createdOn} />
          <Duration duration={duration} />
          <IncidentStatusBadge incidentStatusId={incidentStatusId} />
        </CardBody>
        <Commander participants={participants} />
      </Card>
  );
};

export default IncidentsListItem;
