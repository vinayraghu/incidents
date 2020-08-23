import React from 'react';
import { IncidentInterface } from './incidents.types';
import {
  getWorkspace,
  getChannelId,
  getChannelName,
  getWorkspaceTeamId
} from './incidents.helpers';

interface ChannelNameInterface {
  incident: IncidentInterface
}

const ChannelName = ({ incident }: ChannelNameInterface) => {
  const workspace = getWorkspace(incident);
  const workspaceTeamId = getWorkspaceTeamId(workspace);
  const channelId = getChannelId(incident);
  const channelName = getChannelName(incident)

  return (
    <a href={`//slack.com/app_redirect?channel=${channelId}&team=${workspaceTeamId}`}>
      {channelName}
    </a>
  )
}

export default ChannelName