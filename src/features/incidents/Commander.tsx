import React from 'react'
import { ParticipantsInterface } from './incidents.types';
import { getCommanderName, getCommanderAvatar, getCommander } from './incidents.helpers';
import {
  AvatarImg,
  CardFooter,
  CommanderTitle
} from './incident.styles';
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
    <CardFooter>
      <AvatarImg src={commanderAvatar} alt={`${commanderName}'s profile`} />
      <CommanderTitle>
        { commanderName }
      </CommanderTitle>
    </CardFooter>
  )
}

export default Commander