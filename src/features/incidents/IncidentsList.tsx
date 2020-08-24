import React, { useState, useEffect, ChangeEvent } from "react";
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
import { IncidentInterface } from "./incidents.types";
import { filterBySearchText } from "./incidents.helpers";

const IncidentsList = () => {
  const incidentsApiData = useSelector(selectIncidentsApiData);
  const openIncidentsCount = useSelector(selectOpenIncidentsCount);
  const recentIncidentsCount = useSelector(selectRecentIncidentsCount);
  const meanTimeToResolution = useSelector(selectMeanTimeToResolution);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncidentsApiData());
  }, [dispatch]);

  const [searchText, setSearchText] = useState('');
  const [filteredResults, setFilteredResults] = useState<Array<IncidentInterface>>([])

  useEffect(() => {
    setFilteredResults(filterBySearchText(incidentsApiData, searchText))
  }, [incidentsApiData, searchText]);

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value);

  return (
    <>
      <section>
        <header>
          <input type="text" value={searchText} onChange={handleSearchInput} />
          <section>
            <label>
              <input type="checkbox" value="" />
              Declared
            </label>
            <label>
              <input type="checkbox" value="" />
              Resolved
            </label>
          </section>
        </header>
        {filteredResults.map((incident) => (
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
