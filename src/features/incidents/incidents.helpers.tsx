import { SeverityInterface } from './incidents.types';

const getSeverityName = (severity: SeverityInterface | null) : string => {
  return severity?.name ?? '';
}

export {
  getSeverityName
}