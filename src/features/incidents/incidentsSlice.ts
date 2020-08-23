import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { IncidentInterface } from './incidents.types';
import { fetchIncidents } from './incidentsService';
import { getOpenIncidentsCount } from './incidents.helpers';

interface IncidentsState {
  apiData: Array<IncidentInterface>;
  openIncidentsCount: number;
  recentIncidentsCount: number;
}

const initialState: IncidentsState = {
  apiData: [],
  openIncidentsCount: 0,
  recentIncidentsCount: 0
};

export const incidentsSlice = createSlice({
  name: 'incidents',
  initialState,
  reducers: {
    receiveIncidents: (state, action: PayloadAction<Array<IncidentInterface>>) => {
      state.apiData = action.payload
      state.openIncidentsCount = getOpenIncidentsCount(action.payload)
      state.recentIncidentsCount = getRecentIncidentsCount(action.payload)
      return state;
    },
  },
});

export const { receiveIncidents } = incidentsSlice.actions;

export const getIncidentsApiData = (): AppThunk => dispatch => {
  fetchIncidents().then((response) => {
    dispatch(receiveIncidents(response))
  })
};

export const selectIncidentsApiData = (state: RootState) => state.incidents.apiData;
export const selectOpenIncidentsCount = (state: RootState) => state.incidents.openIncidentsCount;

export default incidentsSlice.reducer;
