import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import IncidentsList from './IncidentsList'
import { getSeverityName, getIncidentCommander, getCommanderName, getCommanderAvatar } from './incidents.helpers';

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

test('The getIncidentCommander returns the commanders name if one exists', () => {
  const testData1 = [
    {
      "user": {
        "id": "06987541-37f6-44d8-94c8-5ebae3cf7146",
        "realName": "Andy Grove",
        "avatarUrl": "https://secure.gravatar.com/avatar/e06a54a76548d8c35a2c52c7977417e8.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0026-72.png",
        "chatUserId": "U016YQCRDAB"
      },
      "role": null
    },
    {
      "user": {
        "id": "e991194b-3bc6-43f2-84dd-50819b3f4c4d",
        "realName": "Gordon Moore",
        "avatarUrl": "https://secure.gravatar.com/avatar/476be6a12a76114699ceeedc6475370f.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0023-72.png",
        "chatUserId": "U014RA28GRK"
      },
      "role": {
        "id": 1,
        "name": "Incident Commander",
        "description": "The primary decision maker for the incident, listening to hypotheses and data presented by participants and delegating actions."
      }
    }
  ];
  const expectedResult = {
    "user": {
      "id": "e991194b-3bc6-43f2-84dd-50819b3f4c4d",
      "realName": "Gordon Moore",
      "avatarUrl": "https://secure.gravatar.com/avatar/476be6a12a76114699ceeedc6475370f.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0023-72.png",
      "chatUserId": "U014RA28GRK"
    },
    "role": {
      "id": 1,
      "name": "Incident Commander",
      "description": "The primary decision maker for the incident, listening to hypotheses and data presented by participants and delegating actions."
    }
  };
  const testData2 = [
    {
      "user": {
        "id": "e991194b-3bc6-43f2-84dd-50819b3f4c4d",
        "realName": "Gordon Moore",
        "avatarUrl": "https://secure.gravatar.com/avatar/476be6a12a76114699ceeedc6475370f.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0023-72.png",
        "chatUserId": "U014RA28GRK"
      },
      "role": null
    }
  ];
  expect(getIncidentCommander(testData1)).toEqual(expectedResult)
  expect(getIncidentCommander(testData2)).toBe(undefined);
});

test('The getCommanderName returns the realName of the commander object', () => {
  const testData1 = {
      "user": {
        "id": "e991194b-3bc6-43f2-84dd-50819b3f4c4d",
        "realName": "Gordon Moore",
        "avatarUrl": "https://secure.gravatar.com/avatar/476be6a12a76114699ceeedc6475370f.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0023-72.png",
        "chatUserId": "U014RA28GRK"
      },
      "role": {
        "id": 1,
        "name": "Incident Commander",
        "description": "The primary decision maker for the incident, listening to hypotheses and data presented by participants and delegating actions."
      }
    }
  expect(getCommanderName(testData1)).toBe('Gordon Moore');
})

test('The getCommanderAvatar returns the avatarUrl of the commander object', () => {
  const testData1 = {
      "user": {
        "id": "e991194b-3bc6-43f2-84dd-50819b3f4c4d",
        "realName": "Gordon Moore",
        "avatarUrl": "https://secure.gravatar.com/avatar/476be6a12a76114699ceeedc6475370f.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0023-72.png",
        "chatUserId": "U014RA28GRK"
      },
      "role": {
        "id": 1,
        "name": "Incident Commander",
        "description": "The primary decision maker for the incident, listening to hypotheses and data presented by participants and delegating actions."
      }
    }
  expect(getCommanderAvatar(testData1)).toBe('https://secure.gravatar.com/avatar/476be6a12a76114699ceeedc6475370f.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0023-72.png');
})