import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IncidentListItem from './IncidentListItem';
import {
  getIncidents,
  selectIncidents,
} from './incidentsSlice';

const IncidentsList = () => {
  const incidents = useSelector(selectIncidents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncidents())
  }, [dispatch]);

  return (
    <div>
      {
        incidents.map(incident => <IncidentListItem incident={incident} />)
      }
    </div>
  );
}

export default IncidentsList