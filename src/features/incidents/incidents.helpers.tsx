import {
  SeverityInterface,
  ParticipantsInterface,
  ParticipantInterface,
  IncidentInterface,
  WorkspaceInterface,
} from "./incidents.types";

const getSeverityName = (severity: SeverityInterface | null): string => {
  return severity?.name ?? "";
};

const getCommander = (
  participants: ParticipantsInterface
): ParticipantInterface | undefined => {
  return participants.filter((p) => p?.role?.id === 1)?.[0];
};

const getCommanderName = (commander: ParticipantInterface): string => {
  // Expects caller  to validate that the object exists
  return commander.user.realName;
};

const getCommanderAvatar = (commander: ParticipantInterface): string => {
  // Expects caller  to validate that the object exists
  return commander.user.avatarUrl;
};

const getWorkspace = (incident: IncidentInterface): WorkspaceInterface => {
  return incident.workspace;
};

const getWorkspaceTeamId = (workspace: WorkspaceInterface): string => {
  return workspace.teamId;
};

const getChannelId = (incident: IncidentInterface) => {
  return incident.channelId;
};

const getChannelName = (incident: IncidentInterface) => {
  return incident.channelName;
};

const getLocalDate = (createdOn: string): string =>
  new Date(createdOn).toLocaleDateString();

interface DaysHoursMinutesInterface {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getDaysHoursMinutesSeconds = (
  totalSeconds: number
): DaysHoursMinutesInterface => {
  // Stack overflow had a clean solution
  // https://stackoverflow.com/questions/36098913/convert-seconds-to-days-hours-minutes-and-seconds

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

export {
  getSeverityName,
  getCommander,
  getCommanderName,
  getCommanderAvatar,
  getWorkspace,
  getChannelId,
  getWorkspaceTeamId,
  getChannelName,
  getLocalDate,
  getDaysHoursMinutesSeconds,
};
