import React from "react";
import { IncidentInterface } from "./incidents.types";
import { getSeverityName } from "./incidents.helpers";
import Commander from "./Commander";
import ChannelName from "./ChannelName";
import Timestamp from "./Timestamp";
import Duration from "./Duration";
import IncidentStatusBadge from "./IncidentStatusBadge";

import styled from "styled-components";

const Card = styled.article`
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 15px;
  font-family: "Roboto Mono"; monospace;
`;

const CardBody = styled.section`
  padding: 15px;
`;

const CardHeader = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 15px;
  border-bottom: 1px solid #ddd;
`;

const IncidentTitle = styled.h4`
  font-family: "Poppins", sans-serif;
  margin: 0;
  font-size: 21px;
`;

const Badge = styled.div`
  display: inline-block;
  font-size: 8px;
  line-height: 12px;
  margin: 0;
  background: #ddd;
  border-radius: 4px;
  padding: 0 12px;
`;

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
        {severityName && (
          <Badge>
            <p>{severityName}</p>
          </Badge>
        )}
      </CardHeader>
      <CardBody>
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
