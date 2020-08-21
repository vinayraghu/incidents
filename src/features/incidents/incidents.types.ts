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
  role: RoleInterface | null;
}

export type ParticipantsInterface = Array<ParticipantInterface>

export interface IncidentsInterface {
  id: Number;
  name: String;
  incidentStatusId: String;
  duration: Number;
  participants: ParticipantsInterface;
  severity: SeverityInterface | null;
}
