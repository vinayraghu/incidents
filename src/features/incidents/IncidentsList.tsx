import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IncidentListItem from './IncidentListItem';
import {
  getIncidentsApiData,
  selectIncidentsApiData,
} from './incidentsSlice';

const IncidentsList = () => {
  const incidentsApiData = useSelector(selectIncidentsApiData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncidentsApiData())
  }, [dispatch]);

  return (
    <div>
      {
        incidentsApiData.map(incident => <IncidentListItem incident={incident} key={incident.id} />)
      }
    </div>
  );
}

export default IncidentsList