export type IncidentStatusInterface = "DECLARED" | "RESOLVED";

export interface UserInterface {
  id: String;
  realName: String;
  avatarUrl: String;
  chatUserId: String;
}

export interface RoleInterface {
  id: Number;
  name: String;
  description: String;
}

export interface SeverityInterface {
  id: Number;
  name: String;
  description: String;
  sortOrder: Number;
  emoji: String;
}

export interface ParticipantInterface {
  user: UserInterface;
  role?: RoleInterface;
}

export type ParticipantsInterface = Array<ParticipantInterface>

export interface IncidentsResponseInterface {
  id: Number;
  name: String;
  incidentStatusId: IncidentStatusInterface;
  duration: Number;
  participants: ParticipantsInterface;
  severity: SeverityInterface;
}

export interface IncidentsInterface {
  name: String;
  severityName?: String;
  userName?: String;
  userAvatar?: String;
  channelName: String;
  createdOn: String;
  duration: Number;
  incidentStatusId: IncidentStatusInterface;
}

export interface IncidentsState {
  incidents: Array<IncidentsInterface>
}
