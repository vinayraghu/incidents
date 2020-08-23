import React from "react";

interface IncidentStatusBadgeInterface {
  incidentStatusId: string;
}

const IncidentStatusBadge = ({ incidentStatusId }: IncidentStatusBadgeInterface) => {
  return (
    <div>
      { incidentStatusId }
    </div>
  );
};

export default IncidentStatusBadge;
