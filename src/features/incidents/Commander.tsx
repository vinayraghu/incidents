import React from 'react'
import { ParticipantsInterface } from './incidents.types';
import { getCommanderName, getCommanderAvatar, getCommander } from './incidents.helpers';
import styled from 'styled-components';
interface CommanderInterfce {
  participants: ParticipantsInterface;
}

const AvatarImg = styled.img`
  border-radius: 50%;
  margin-right: 15px;
  width: 30px;
  height: 30px;
`;

const CommanderTitle = styled.h4`
  font-weight: 300;
  margin: 0;
`

const CardFooter = styled.footer`
  display: flex;
  align-items: center;
  border-top: 1px solid #ddd;
  padding: 15px;
  margin-top: 15px;
`;

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