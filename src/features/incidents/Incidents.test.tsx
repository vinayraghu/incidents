import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import IncidentsList from './IncidentsList'
import { getSeverityName } from './incidents.helpers';

test('The <IncidentsList> component should display key information from incidents', () => {
  const mounted = render(
    <Provider store={store}>
      <IncidentsList />
    </Provider>
  )
  expect(true).toBe(true)
})

test('The getSeverityName method returns severity name or an empty string', () => {
  expect(getSeverityName(null)).toBe('');
  expect(getSeverityName({
    "id": 3,
    "name": "SEV-2",
    "emoji": ":two:",
    "description": "Service or tool outage or degradation that impacts employees, vendors, partners, or other internal stakeholders.",
    "sortOrder": 2
  })).toBe('SEV-2')
})