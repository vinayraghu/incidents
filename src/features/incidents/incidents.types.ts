export interface UserInterface {
  id: string;
  realName: string;
  avatarUrl: string;
  chatUserId: string;
}

export interface RoleInterface {
  id: number;
  name: string;
  description: string;
}

export interface SeverityInterface {
  id: number;
  name: string;
  description: string;
  sortOrder: number;
  emoji: string;
}

export interface ParticipantInterface {
  user: UserInterface;
  role: RoleInterface | null;
}

export type ParticipantsInterface = Array<ParticipantInterface>;

export interface WorkspaceInterface {
  id: number;
  name: string;
  teamId: string;
  appId: string;
}
export interface IncidentInterface {
  id: number;
  name: string;
  incidentStatusId: string;
  duration: number;
  participants: ParticipantsInterface;
  severity: SeverityInterface | null;
  channelId: string;
  channelName: string;
  channelPrivate: boolean;
  workspace: WorkspaceInterface;
  createdOn: string;
  summary: string | null;
}
