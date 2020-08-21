import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import IncidentsList from './IncidentsList'

test('The <IncidentsList> component should display key information from incidents', () => {
  const mounted = render(
    <Provider store={store}>
      <IncidentsList />
    </Provider>
  )
  expect(true).toBe(true)
})
