import { SeverityInterface, ParticipantsInterface, ParticipantInterface, IncidentInterface, WorkspaceInterface } from './incidents.types';

const getSeverityName = (severity: SeverityInterface | null) : string => {
  return severity?.name ?? '';
}

const getCommander = (participants: ParticipantsInterface) : ParticipantInterface | undefined => {
  return participants.filter(p => p?.role?.id === 1)?.[0]
}

const getCommanderName = (commander: ParticipantInterface) : string => {
  // Expects caller  to validate that the object exists
  return commander.user.realName;
}

const getCommanderAvatar = (commander: ParticipantInterface) : string => {
  // Expects caller  to validate that the object exists
  return commander.user.avatarUrl;
}

const getWorkspace = (incident: IncidentInterface): WorkspaceInterface => {
  return incident.workspace;
}

const getWorkspaceTeamId = (workspace: WorkspaceInterface): string => {
  return workspace.teamId;
}

const getChannelId = (incident: IncidentInterface) => {
  return incident.channelId
}

export {
  getSeverityName,
  getCommander,
  getCommanderName,
  getCommanderAvatar,
  getWorkspace,
  getChannelId,
  getWorkspaceTeamId
}