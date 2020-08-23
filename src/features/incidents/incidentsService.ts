import incidentsData from '../../data/incidentsData';
import { IncidentInterface } from './incidents.types';

const fetchIncidents = (): Promise<Array<IncidentInterface>> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return res(incidentsData)
    }, 1000)
  })
}

export { fetchIncidents }