import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IncidentListItem from "./IncidentListItem";
import {
  getIncidentsApiData,
  selectIncidentsApiData,
  selectOpenIncidentsCount,
  selectRecentIncidentsCount,
  selectMeanTimeToResolution,
} from "./incidentsSlice";
import OpenIncidentsCount from "./OpenIncidentsCount";
import RecentIncidentsCount from "./RecentIncidentsCount";
import MeanTimeToResolution from "./MeanTimeToResolution";

const IncidentsList = () => {
  const incidentsApiData = useSelector(selectIncidentsApiData);
  const openIncidentsCount = useSelector(selectOpenIncidentsCount);
  const recentIncidentsCount = useSelector(selectRecentIncidentsCount);
  const meanTimeToResolution = useSelector(selectMeanTimeToResolution);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncidentsApiData());
  }, [dispatch]);

  return (
    <>
      <section>
        {incidentsApiData.map((incident) => (
          <IncidentListItem incident={incident} key={incident.id} />
        ))}
      </section>
      <section>
        <OpenIncidentsCount count={openIncidentsCount} />
        <RecentIncidentsCount count={recentIncidentsCount} />
        <MeanTimeToResolution time={meanTimeToResolution} />
      </section>
    </>
  );
};

export default IncidentsList;
