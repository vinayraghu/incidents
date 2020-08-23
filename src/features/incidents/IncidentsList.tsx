import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IncidentListItem from './IncidentListItem';
import {
  getIncidentsApiData,
  selectIncidentsApiData,
  selectOpenIncidentsCount,
} from './incidentsSlice';
import OpenIncidentCount from './OpenIncidentCount';

const IncidentsList = () => {
  const incidentsApiData = useSelector(selectIncidentsApiData);
  const openIncidentsCount = useSelector(selectOpenIncidentsCount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncidentsApiData())
  }, [dispatch]);

  return (
    <>
    <section>
      {
        incidentsApiData.map(incident => <IncidentListItem incident={incident} key={incident.id} />)
      }
    </section>
    <section>
      <OpenIncidentCount count={openIncidentsCount} />
    </section>
    </>
  );
}

export default IncidentsList