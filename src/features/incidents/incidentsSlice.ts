import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { IncidentInterface } from './incidents.types';
import { fetchIncidents } from './incidentsService';

interface IncidentsState {
  apiData: Array<IncidentInterface>
}

const initialState: IncidentsState = {
  apiData: []
};

export const incidentsSlice = createSlice({
  name: 'incidents',
  initialState,
  reducers: {
    receiveIncidents: (state, action: PayloadAction<Array<IncidentInterface>>) => {
      state.apiData = action.payload
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
