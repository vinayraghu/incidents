import incidentsData from './incidentsData';
import { IncidentsResponseInterface } from '../features/incidents/incidents.types';

const isNonEmptyArray = (arr: Array<any>): boolean => arr.length > 0;

// const getUserName = (incident: IncidentsResponseInterface) : String => {
//   if (isNonEmptyArray(incident.participants)) {

//   }
//   return '';
// }

incidentsData.map(incident => ({
  name: incident.name,
  severityName: incident?.severity?.name,
}))