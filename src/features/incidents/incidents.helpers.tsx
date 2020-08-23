import { SeverityInterface, ParticipantsInterface, ParticipantInterface } from './incidents.types';

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

export {
  getSeverityName,
  getCommander,
  getCommanderName,
  getCommanderAvatar
}