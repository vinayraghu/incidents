import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { IncidentsInterface } from './incidents.types';
import incidentsData from '../../data/incidentsData';

const initialState: Array<IncidentsInterface> = [];

export const incidentsSlice = createSlice({
  name: 'incidents',
  initialState,
  reducers: {
    receiveIncidents: (state, action: PayloadAction<Array<IncidentsInterface>>) => {
      state = action.payload
      return state;
    },
  },
});

export const { receiveIncidents } = incidentsSlice.actions;

export const getIncidents = (): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(receiveIncidents(incidentsData));
  }, 1000);
};

export const selectIncidents = (state: RootState) => state.incidents;

export default incidentsSlice.reducer;
