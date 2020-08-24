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
import { filterBySearchText, filterByIncidentStatusId } from "./incidents.helpers";

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
  const [showDeclared, setShowDeclared] = useState(true);
  const [showResolved, setShowResolved] = useState(true);
  const [filteredResults, setFilteredResults] = useState<Array<IncidentInterface>>([])

  useEffect(() => {
    // Two booleans, 4 cases
    // Additionally have to acount for search text
    if (showResolved && showDeclared) {
      setFilteredResults(filterBySearchText(incidentsApiData, searchText))
    } else if (showResolved && !showDeclared) {
      setFilteredResults(filterBySearchText(filterByIncidentStatusId(incidentsApiData, "RESOLVED"), searchText))
    } else if(!showResolved && showDeclared) {
      setFilteredResults(filterBySearchText(filterByIncidentStatusId(incidentsApiData, "DECLARED"), searchText))
    } else {
      setFilteredResults([])
    }
  }, [incidentsApiData, showDeclared, showResolved, searchText])

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value);

  return (
    <>
      <section>
        <header>
          <input type="text" value={searchText} onChange={handleSearchInput} />
          <section>
            <label>
              <input type="checkbox" checked={showDeclared} onChange={() => setShowDeclared(!showDeclared)} />
              Declared
            </label>
            <label>
              <input type="checkbox" checked={showResolved} onChange={() => setShowResolved(!showResolved)} />
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
