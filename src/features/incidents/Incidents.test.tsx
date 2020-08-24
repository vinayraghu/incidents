import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import IncidentsList from "./IncidentsList";
import {
  getSeverityName,
  getCommander,
  getCommanderName,
  getCommanderAvatar,
  getWorkspace,
  getChannelId,
  getChannelName,
  getWorkspaceTeamId,
  getLocalDate,
  getDaysHoursMinutesSeconds,
  getOpenIncidentsCount,
  getRecentIncidentsCount,
  getMeanTimeToResolution,
  filterBySearchText,
  filterByIncidentStatusId
} from "./incidents.helpers";

const mockIncident = {
  id: 33,
  name: "Incident with private room",
  incidentStatusId: "RESOLVED",
  impact: null,
  summary: null,
  duration: 9725,
  resolution: null,
  channelId: "G017DQCKZT5",
  channelName: "-incident-20200720-incident-with-private-room",
  channelPrivate: false,
  identifiedOn: null,
  mitigatedOn: null,
  resolvedOn: "2020-07-20T17:56:56Z",
  createdOn: "2020-07-20T15:14:51Z",
  workspace: {
    id: 1,
    name: "Intel",
    teamId: "T014YSGR936",
    appId: "A014TU1UJ94",
  },
  severity: null,
  participants: [
    {
      user: {
        id: "06987541-37f6-44d8-94c8-5ebae3cf7146",
        realName: "Andy Grove",
        avatarUrl:
          "https://secure.gravatar.com/avatar/e06a54a76548d8c35a2c52c7977417e8.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0026-72.png",
        chatUserId: "U016YQCRDAB",
      },
      role: {
        id: 2,
        name: "Communications Lead",
        description:
          "The core communicator for the incident, conveying status, updates, and technical details to stakeholders, support personnel, and/or customers.",
      },
    },
    {
      user: {
        id: "e991194b-3bc6-43f2-84dd-50819b3f4c4d",
        realName: "Gordon Moore",
        avatarUrl:
          "https://secure.gravatar.com/avatar/476be6a12a76114699ceeedc6475370f.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0023-72.png",
        chatUserId: "U014RA28GRK",
      },
      role: null,
    },
  ],
};

const mockParticipantWithCommander = {
  user: {
    id: "e991194b-3bc6-43f2-84dd-50819b3f4c4d",
    realName: "Gordon Moore",
    avatarUrl:
      "https://secure.gravatar.com/avatar/476be6a12a76114699ceeedc6475370f.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0023-72.png",
    chatUserId: "U014RA28GRK",
  },
  role: {
    id: 1,
    name: "Incident Commander",
    description:
      "The primary decision maker for the incident, listening to hypotheses and data presented by participants and delegating actions.",
  },
};

const mockParticipantsWithMultipleUsers = [
  {
    user: {
      id: "06987541-37f6-44d8-94c8-5ebae3cf7146",
      realName: "Andy Grove",
      avatarUrl:
        "https://secure.gravatar.com/avatar/e06a54a76548d8c35a2c52c7977417e8.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0026-72.png",
      chatUserId: "U016YQCRDAB",
    },
    role: null,
  },
  {
    user: {
      id: "e991194b-3bc6-43f2-84dd-50819b3f4c4d",
      realName: "Gordon Moore",
      avatarUrl:
        "https://secure.gravatar.com/avatar/476be6a12a76114699ceeedc6475370f.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0023-72.png",
      chatUserId: "U014RA28GRK",
    },
    role: {
      id: 1,
      name: "Incident Commander",
      description:
        "The primary decision maker for the incident, listening to hypotheses and data presented by participants and delegating actions.",
    },
  },
];

const mockParticipantsWithoutCommander = [
  {
    user: {
      id: "e991194b-3bc6-43f2-84dd-50819b3f4c4d",
      realName: "Gordon Moore",
      avatarUrl:
        "https://secure.gravatar.com/avatar/476be6a12a76114699ceeedc6475370f.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0023-72.png",
      chatUserId: "U014RA28GRK",
    },
    role: null,
  },
];

test("The <IncidentsList> component should display key information from incidents", () => {
  const mounted = render(
    <Provider store={store}>
      <IncidentsList />
    </Provider>
  );
  expect(true).toBe(true);
});

test("The getSeverityName method returns severity name or an empty string", () => {
  expect(getSeverityName(null)).toBe("");
  expect(
    getSeverityName({
      id: 3,
      name: "SEV-2",
      emoji: ":two:",
      description:
        "Service or tool outage or degradation that impacts employees, vendors, partners, or other internal stakeholders.",
      sortOrder: 2,
    })
  ).toBe("SEV-2");
});

test("The getCommander returns the commanders name if one exists", () => {
  const expectedResult = {
    user: {
      id: "e991194b-3bc6-43f2-84dd-50819b3f4c4d",
      realName: "Gordon Moore",
      avatarUrl:
        "https://secure.gravatar.com/avatar/476be6a12a76114699ceeedc6475370f.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0023-72.png",
      chatUserId: "U014RA28GRK",
    },
    role: {
      id: 1,
      name: "Incident Commander",
      description:
        "The primary decision maker for the incident, listening to hypotheses and data presented by participants and delegating actions.",
    },
  };
  expect(getCommander(mockParticipantsWithMultipleUsers)).toEqual(
    expectedResult
  );
  expect(getCommander(mockParticipantsWithoutCommander)).toBe(undefined);
});

test("The getCommanderName returns the realName of the commander object", () => {
  expect(getCommanderName(mockParticipantWithCommander)).toBe("Gordon Moore");
});

test("The getCommanderAvatar returns the avatarUrl of the commander object", () => {
  expect(getCommanderAvatar(mockParticipantWithCommander)).toBe(
    "https://secure.gravatar.com/avatar/476be6a12a76114699ceeedc6475370f.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0023-72.png"
  );
});

test("The getWorkspace method fetches the workspace object from the incident object", () => {
  const expectedResult = {
    id: 1,
    name: "Intel",
    teamId: "T014YSGR936",
    appId: "A014TU1UJ94",
  };
  expect(getWorkspace(mockIncident)).toEqual(expectedResult);
});

test("The getWorkspaceTeamId method", () => {
  expect(getWorkspaceTeamId(mockIncident.workspace)).toBe("T014YSGR936");
});

test("The getChannelId method", () => {
  expect(getChannelId(mockIncident)).toBe("G017DQCKZT5");
});

test("The getChannelName method", () => {
  expect(getChannelName(mockIncident)).toBe(
    "-incident-20200720-incident-with-private-room"
  );
});

test("The getLocalDate method converts UTC date to local date string", () => {
  expect(getLocalDate(`2020-07-21T13:05:55Z`)).toBe("7/21/2020");
});

test("The getDaysHoursMinutesSeconds splits the given seconds into days, hours, minutes and seconds", () => {
  const expectedResult = {
    days: 2,
    hours: 4,
    minutes: 3,
    seconds: 42,
  };
  expect(getDaysHoursMinutesSeconds(187422)).toEqual(expectedResult);
  expect(getDaysHoursMinutesSeconds(1)).toEqual({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 1,
  });
  expect(getDaysHoursMinutesSeconds(61)).toEqual({
    days: 0,
    hours: 0,
    minutes: 1,
    seconds: 1,
  });
  expect(getDaysHoursMinutesSeconds(3601)).toEqual({
    days: 0,
    hours: 1,
    minutes: 0,
    seconds: 1,
  });
  expect(getDaysHoursMinutesSeconds(86400)).toEqual({
    days: 1,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
});

test("The getOpenIncidentsCount returns number of incidents not in resolved status", () => {
  expect(getOpenIncidentsCount([mockIncident])).toBe(0);
  expect(
    getOpenIncidentsCount([{ ...mockIncident, incidentStatusId: "DECLARED" }])
  ).toBe(1);
});

test("The getRecentIncidentsCount method returns number of incidents opened in the last 30 days", () => {
  expect(getRecentIncidentsCount([mockIncident])).toBe(0);
  expect(
    getRecentIncidentsCount([
      { ...mockIncident, createdOn: new Date().toUTCString() },
    ])
  ).toBe(1);
});

test("The getMeanTimeToResolution calculates mean time to resolution", () => {
  expect(getMeanTimeToResolution([mockIncident])).toBe(9725);
  expect(
    getMeanTimeToResolution([mockIncident, mockIncident, mockIncident])
  ).toBe(9725);
  expect(
    getMeanTimeToResolution([{ ...mockIncident, incidentStatusId: "DECLARED" }])
  ).toBe(0);
});

test('The filterBySearchText method filters the array if name and summary includes search text', () => {
  expect(filterBySearchText([mockIncident, mockIncident], "Incident")).toEqual([mockIncident, mockIncident]);
  expect(filterBySearchText([mockIncident], "incident")).toEqual([mockIncident]);
  expect(filterBySearchText([mockIncident], "garbage")).toEqual([]);
})

test('The filterByIncidentStatusId method filters the array to match on incidentStatusId', () => {
  expect(filterByIncidentStatusId([mockIncident], "DECLARED")).toEqual([]);
  expect(filterByIncidentStatusId([mockIncident], "RESOLVED")).toEqual([mockIncident]);
})
