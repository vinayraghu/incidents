import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { IncidentInterface } from './incidents.types';
import { fetchIncidents } from './incidentsService';
import { getOpenIncidentCount } from './incidents.helpers';

interface IncidentsState {
  apiData: Array<IncidentInterface>;
  openIncidentCount: number;
}

const initialState: IncidentsState = {
  apiData: [],
  openIncidentCount: 0
};

export const incidentsSlice = createSlice({
  name: 'incidents',
  initialState,
  reducers: {
    receiveIncidents: (state, action: PayloadAction<Array<IncidentInterface>>) => {
      state.apiData = action.payload
      state.openIncidentCount = getOpenIncidentCount(action.payload)
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

export default incidentsSlice.reducer;
