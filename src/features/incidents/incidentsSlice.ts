import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { IncidentsInterface } from './incidents.types';
import { fetchIncidents } from './incidentsService';

interface IncidentsState {
  apiData: Array<IncidentsInterface>
}

const initialState: IncidentsState = {
  apiData: []
};

export const incidentsSlice = createSlice({
  name: 'incidents',
  initialState,
  reducers: {
    receiveIncidents: (state, action: PayloadAction<Array<IncidentsInterface>>) => {
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
