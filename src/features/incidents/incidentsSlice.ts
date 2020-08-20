import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { IncidentsState, IncidentsInterface } from './incidents.types';

const initialState: IncidentsState = {
  incidents: []
};

export const incidentsSlice = createSlice({
  name: 'incidents',
  initialState,
  reducers: {
    receiveIncidents: (state, action: PayloadAction<Array<IncidentsInterface>>) => {
      state.incidents = action.payload
    },
  },
});

export const { receiveIncidents } = incidentsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getIncidents = (): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(receiveIncidents([]));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectParticipants = (state: RootState) => state.counter.value;
export const selectSeverity = (state: RootState) => state.counter.value;
export const selectIncidentName = (state: RootState) => state.counter.value;
export const selectCount = (state: RootState) => state.counter.value;

export default incidentsSlice.reducer;
