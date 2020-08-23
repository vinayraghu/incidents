import React from 'react'
import { ParticipantsInterface } from './incidents.types';
import { getCommanderName, getCommanderAvatar, getCommander } from './incidents.helpers';

interface CommanderInterfce {
  participants: ParticipantsInterface;
}

const Commander = ({ participants }: CommanderInterfce) => {
  const commanderData = getCommander(participants)
  if (!commanderData) {
    return null;
  }

  const commanderName = getCommanderName(commanderData);
  const commanderAvatar = getCommanderAvatar(commanderData);

  return (
    <>
      <h4>
        { commanderName }
      </h4>
      <img src={commanderAvatar} alt={`${commanderName}'s profile`} />
    </>
  )
}

export default Commander