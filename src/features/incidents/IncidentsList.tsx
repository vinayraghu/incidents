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
import {
  filterBySearchText,
  filterByIncidentStatusId,
} from "./incidents.helpers";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 20px;
  padding: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1;
  @media (min-width: 768px) {
    grid-template-columns: 75% 25%;
  }
`;

const Sidebar = styled.div`
  padding: 15px;
`;
const Content = styled.div`
  padding: 15px;
`;

const IncidentsList = () => {
  const incidentsApiData = useSelector(selectIncidentsApiData);
  const openIncidentsCount = useSelector(selectOpenIncidentsCount);
  const recentIncidentsCount = useSelector(selectRecentIncidentsCount);
  const meanTimeToResolution = useSelector(selectMeanTimeToResolution);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncidentsApiData());
  }, [dispatch]);

  const [searchText, setSearchText] = useState("");
  const [showDeclared, setShowDeclared] = useState(true);
  const [showResolved, setShowResolved] = useState(true);
  const [filteredResults, setFilteredResults] = useState<
    Array<IncidentInterface>
  >([]);

  useEffect(() => {
    // Two booleans, 4 cases
    // Additionally have to acount for search text
    if (showResolved && showDeclared) {
      setFilteredResults(filterBySearchText(incidentsApiData, searchText));
    } else if (showResolved && !showDeclared) {
      setFilteredResults(
        filterBySearchText(
          filterByIncidentStatusId(incidentsApiData, "RESOLVED"),
          searchText
        )
      );
    } else if (!showResolved && showDeclared) {
      setFilteredResults(
        filterBySearchText(
          filterByIncidentStatusId(incidentsApiData, "DECLARED"),
          searchText
        )
      );
    } else {
      setFilteredResults([]);
    }
  }, [incidentsApiData, showDeclared, showResolved, searchText]);

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchText(event.target.value);

  return (
    <>
      <Grid>
        <GlobalStyles />
        <Content>
          <label htmlFor="incidents-search">
            Search for incidents
            <SearchInput
              id="incidents-search"
              type="text"
              value={searchText}
              onChange={handleSearchInput}
            />
          </label>
          <section>
            <label>
              <input
                type="checkbox"
                checked={showDeclared}
                onChange={() => setShowDeclared(!showDeclared)}
              />
              Declared
            </label>
            <label>
              <input
                type="checkbox"
                checked={showResolved}
                onChange={() => setShowResolved(!showResolved)}
              />
              Resolved
            </label>
          </section>
          {filteredResults.map((incident) => (
            <IncidentListItem incident={incident} key={incident.id} />
          ))}
        </Content>
        <Sidebar>
          <OpenIncidentsCount count={openIncidentsCount} />
          <RecentIncidentsCount count={recentIncidentsCount} />
          <MeanTimeToResolution time={meanTimeToResolution} />
        </Sidebar>
      </Grid>
    </>
  );
};

export default IncidentsList;
